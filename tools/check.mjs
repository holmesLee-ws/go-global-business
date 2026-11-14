#!/usr/bin/env node
// 리포 관리자용 검사기. 학습자에게는 필요 없다.
// 검사: 커리큘럼 형식·선수 관계(R2), 수치·금액 없음(R2), 국내 근거·글로벌 비교 칸(R10),
// 출처 키·공식 도메인·조회일(R11), 경계 영역 허용 목록(R13), 미리 만든 시각 자료 없음(R5), 설정 JSON 유효성.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");

const LEVELS = ["Explain", "Apply", "Evaluate", "Develop"];
const FIELDS = ["선수", "핵심 질문", "목표", "만들어 볼 것", "국내 근거", "글로벌 비교"];
const OPTIONAL = ["경계·연결"];
// 공식 기관 도메인(R11 정본). 하위 도메인 포함.
const OFFICIAL_DOMAINS = [
  // 국내: 법령
  "law.go.kr", "law.nanet.go.kr", "elaw.klri.re.kr", "lawmaking.go.kr",
  // 국내: 부처·감독·공공기관
  "mofe.go.kr", "moef.go.kr", "motir.go.kr", "moel.go.kr", "mohw.go.kr", "gov.kr", "fss.or.kr", "bok.or.kr", "nts.go.kr", "nps.or.kr", "comwel.or.kr",
  "kotra.or.kr", "investkorea.org", "exportvoucher.com", "koreaexim.go.kr", "ksure.or.kr", "0404.go.kr", "kita.net", "kcab.or.kr", "kcabinternational.or.kr", "kosti.or.kr", "yestrade.go.kr",
  // 글로벌: 정부·국제기구
  "govinfo.gov", "justice.gov", "legislation.gov.uk", "gov.uk", "oecd.org", "ohchr.org", "un.org", "unidroit.org", "iccwbo.org", "delaware.gov", "irs.gov", "cfius.gov",
  "jetro.go.jp", "moj.go.jp", "moj.go.kr", "acra.gov.sg", "chinhphu.vn", "mof.gov.vn", "mofcom.gov.cn", "npc.gov.cn", "ndrc.gov.cn", "gtai.de", "europa.eu", "treas.gov", "treasury.gov", "bis.gov",
  "sanctionsmap.eu", "wassenaar.org", "unctad.org", "worldbank.org", "ilo.org", "nexi.go.jp", "exim.gov", "wto.org",
  // 학술
];
// 학술 키(A#)와 OECD 출판물에만 허용하는 도메인, 도메인 대신 정확한 URL로만 허용하는 예외.
const ACADEMIC_DOMAINS = ["doi.org"];
const URL_EXCEPTIONS = ["https://hbr.org/2001/09/distance-still-matters-the-hard-reality-of-global-expansion"];
// 시리즈 영역(R13). 디스패처 브리프가 있는 영역 + go-develop.
const SERIES = ["go-develop", "go-accounting", "go-ai", "go-compliance-and-legal", "go-control", "go-controllership", "go-corporate-communications", "go-cx", "go-data-analytics", "go-economics", "go-esg", "go-finance", "go-general-affairs", "go-hr", "go-hse", "go-icfr", "go-innovation-rnd", "go-leadership-negotiation", "go-marketing", "go-mis", "go-operations", "go-product", "go-project-management", "go-resilience", "go-sales", "go-scm", "go-security", "go-startup-agile", "go-strategy", "go-tax", "go-treasury", "go-valuation"];
const STALE_DAYS = 395; // 13개월
const VOLATILE_DAYS = 183; // `변동: 잦음` 표시 출처는 6개월
// 경계 표(docs/build/spec.md 「경계」)의 대응 모듈 — 정본. 모듈마다 그 go-* 이름이 든 경계·연결 줄이 있어야 한다.
const BOUNDARY = {
  "go-scm": ["F3", "M1", "R3"],
  "go-tax": ["M1", "S6", "S7"],
  "go-finance": ["S1", "S6"],
  "go-treasury": ["S1", "S6"],
  "go-accounting": ["S4"],
  "go-control": ["S4"],
  "go-controllership": ["S4"],
  "go-icfr": ["S4"],
  "go-compliance-and-legal": ["M4", "R1", "R2"],
  "go-hr": ["S5"],
  "go-security": ["S3"],
  "go-esg": ["M4"],
  "go-strategy": ["M3"],
  "go-valuation": ["M3"],
  "go-marketing": ["M2"],
  "go-economics": ["F2", "S6"],
  "go-resilience": ["M1"],
  "go-leadership-negotiation": ["C1"],
};
// `변동: 잦음` 필수 대상(R11): 외국환거래규정, 진출국 외국인투자 규제, 제재·수출통제 목록.
const VOLATILE_REQUIRED = [/외국환거래규정/, /Sanction|SDN|Consolidated List|50 Percent|Export Administration|Wassenaar|제재/i, /CFIUS|negative|네거티브|Luật Đầu tư|Nghị định|investment screening|외국인투자 심사|外商投资|외상투자/i, /전략물자|YESTRADE|수출허가|자가판정|전문판정/];
// 졸업 모듈 X1 「만들어 볼 것」에 있어야 하는 진출 검토서의 절(R2·R12).
const X1_SECTIONS = ["국가·진출 방식 비교", "국내 신고·보고 체크리스트", "현지 설립 경로", "운영 리스크", "지원 제도", "확인 필요 목록"];
const NO_COMPARE_MAX = 0.2;
// 금액 표기: 숫자(+천·백·만·억·조 단위 여러 개) 뒤 통화, 통화 기호·코드 앞뒤 숫자.
const MONEY = /\d[\d,.]*\s*(?:[천백만억조]\s*)*(?:원|달러|엔|유로|위안|동|파운드)(?![가-힣])|\d[\d,.]*\s*억(?![가-힣])|(?:USD|US\$|\$|€|¥|£|₩|KRW|EUR|JPY|CNY|VND|GBP|SGD)\s*\d|\d\s*(?:USD|EUR|JPY|CNY|VND|KRW|GBP|SGD|dollars?|won|yen|euros?)\b/i;
const NO_COMPARE = /^비교 실익 적음 — .+/;

function parseCurriculum(text) {
  const modules = new Map();
  const problems = [], warnings = [];
  const refs = new Set();
  const allFields = new Map();
  let noCompare = 0;
  const body = text.split(/^## 출처/m)[0];
  const blocks = body.split(/^### /m).slice(1);
  for (const raw of blocks) {
    const block = raw.split(/^## /m)[0];
    const head = block.split("\n")[0];
    const m = head.match(/^([FMSRCX]\d+) · (.+)$/);
    if (!m) { problems.push(`모듈 제목 형식 오류: ${head}`); continue; }
    const id = m[1];
    if (modules.has(id)) problems.push(`${id}: 중복 id`);
    const fields = {};
    for (const line of block.split("\n").slice(1)) {
      const f = line.match(/^- ([^:]+): (.+)$/);
      if (f) {
        if (!FIELDS.includes(f[1]) && !OPTIONAL.includes(f[1])) problems.push(`${id}: 모르는 칸 「${f[1]}」`);
        fields[f[1]] = f[2];
      }
    }
    allFields.set(id, fields);
    if (fields["글로벌 비교"] && NO_COMPARE.test(fields["글로벌 비교"])) noCompare++;
    for (const name of FIELDS) if (!fields[name]) problems.push(`${id}: 「${name}」 없음`);
    for (const [name, v] of Object.entries(fields)) {
      for (const r of v.matchAll(/\[([KGA]\d+)\]/g)) refs.add(r[1]);
      if (/%|퍼센트/.test(v) || MONEY.test(v)) problems.push(`${id}: 「${name}」에 비율·금액 표기 금지`);
      if (name === "경계·연결") {
        const names = v.match(/go-[a-z-]+/g) || [];
        if (!names.length) problems.push(`${id}: 경계·연결에 go-* 영역 없음`);
        for (const n of names) if (!SERIES.includes(n)) problems.push(`${id}: 시리즈에 없는 영역 ${n}`);
      }
    }
    if (fields["국내 근거"] && !/\[K\d+\]/.test(fields["국내 근거"])) problems.push(`${id}: 국내 근거에 출처 키 없음`);
    if (fields["글로벌 비교"] && !/\[[GA]\d+\]/.test(fields["글로벌 비교"]) && !NO_COMPARE.test(fields["글로벌 비교"])) problems.push(`${id}: 글로벌 비교에 출처 키 없음`);
    if (fields["목표"] && !LEVELS.some((l) => fields["목표"].startsWith(`${l} — `))) problems.push(`${id}: 목표 수준 형식 오류`);
    const prereq = !fields["선수"] || fields["선수"] === "없음" ? [] : fields["선수"].split(",").map((s) => s.trim());
    modules.set(id, prereq);
  }
  if (modules.size && noCompare / modules.size > NO_COMPARE_MAX) problems.push(`「비교 실익 적음」 ${noCompare}개 — 모듈의 20% 초과`);
  for (const [name, ids] of Object.entries(BOUNDARY)) for (const id of ids) {
    const b = allFields.get(id)?.["경계·연결"] || "";
    if (!modules.has(id)) problems.push(`BOUNDARY ${name}: 없는 모듈 ${id}`);
    else if (!(b.match(/go-[a-z-]+/g) || []).includes(name)) problems.push(`${id}: 경계·연결에 ${name} 없음(BOUNDARY)`);
  }
  const mapped = new Set(Object.values(BOUNDARY).flat());
  for (const [id, f] of allFields) if (f["경계·연결"]) for (const n of f["경계·연결"].match(/go-[a-z-]+/g) || []) if (!(BOUNDARY[n] || []).includes(id)) warnings.push(`${id}: ${n} 경계·연결이 BOUNDARY에 없음`);
  const x1 = allFields.get("X1")?.["만들어 볼 것"] || "";
  if (!allFields.has("X1")) problems.push("졸업 모듈 X1 없음");
  for (const sec of X1_SECTIONS) if (!x1.includes(sec)) problems.push(`X1: 만들어 볼 것에 「${sec}」 없음`);
  for (const [id, prereq] of modules) for (const p of prereq) if (!modules.has(p)) problems.push(`${id}: 없는 선수 ${p}`);
  const state = new Map();
  const visit = (id, path) => {
    if (state.get(id) === 2 || !modules.has(id)) return;
    if (state.get(id) === 1) { problems.push(`선수 순환: ${[...path, id].join(" → ")}`); return; }
    state.set(id, 1);
    for (const p of modules.get(id)) visit(p, [...path, id]);
    state.set(id, 2);
  };
  for (const id of modules.keys()) visit(id, []);
  return { modules, problems, refs, warnings };
}

function checkSources(text, refs, today) {
  const problems = [], warnings = [];
  const section = text.split(/^## 출처/m)[1] || "";
  const defined = new Map();
  for (const line of section.split("\n")) {
    const m = line.match(/^- \[([KGA]\d+)\] (.+)$/);
    if (!m) continue;
    if (defined.has(m[1])) problems.push(`출처 ${m[1]} 중복`);
    defined.set(m[1], m[2]);
    const urls = [...m[2].matchAll(/<(https?:\/\/[^>]+)>/g)].map((u) => u[1]);
    if (!urls.length) problems.push(`출처 ${m[1]}: URL 없음`);
    for (const u of urls) {
      let host = "";
      try { host = new URL(u).hostname; } catch { problems.push(`출처 ${m[1]}: URL 형식 오류`); continue; }
      const inList = (list) => list.some((d) => host === d || host.endsWith(`.${d}`));
      const ok = URL_EXCEPTIONS.includes(u) || inList(OFFICIAL_DOMAINS) || (inList(ACADEMIC_DOMAINS) && (m[1].startsWith("A") || /OECD/.test(m[2])));
      if (!ok) problems.push(`출처 ${m[1]}: 공식 도메인 아님 ${host}`);
    }
    if (/원문 미확인|재확인 대기/.test(m[2])) warnings.push(`출처 ${m[1]}: 원문 미확인 표시 — 다시 확인`);
    if (VOLATILE_REQUIRED.some((re) => re.test(m[2])) && !/변동: 잦음/.test(m[2])) problems.push(`출처 ${m[1]}: 변동 잦은 출처인데 「변동: 잦음」 표시 없음`);
    const d = m[2].match(/조회일 (\d{4}-\d{2}-\d{2})/);
    if (!d) { problems.push(`출처 ${m[1]}: 조회일 없음`); continue; }
    const age = (today - new Date(`${d[1]}T00:00:00Z`)) / 86400000;
    if (Number.isNaN(age)) problems.push(`출처 ${m[1]}: 조회일 형식 오류`);
    else if (/변동: 잦음/.test(m[2]) && age > VOLATILE_DAYS) warnings.push(`출처 ${m[1]}: 변동 잦은 출처 조회일 ${d[1]}이 6개월을 넘음 — 다시 확인`);
    else if (age > STALE_DAYS) warnings.push(`출처 ${m[1]}: 조회일 ${d[1]}이 13개월을 넘음 — 다시 확인`);
  }
  for (const r of refs) if (!defined.has(r)) problems.push(`없는 출처 키 [${r}]`);
  for (const k of defined.keys()) if (!refs.has(k)) warnings.push(`쓰지 않는 출처 [${k}]`);
  if (!/확인 기준일: \d{4}-\d{2}-\d{2}/.test(text)) problems.push("지도 머리에 확인 기준일 없음");
  return { problems, warnings };
}

function findVisualAssets(files) {
  const allowedJs = /^tools\/.*\.m?js$/;
  return files.filter((f) => /\.(html?|css|svgz?|png|jpe?g|gif|webp|avif|ico|bmp|tiff?|heic)$/i.test(f) || (/\.m?js$/i.test(f) && !allowedJs.test(f)));
}

function findTemplateMarkup(name, text) {
  const hits = [];
  // 펜스·들여쓴 코드 블록을 가리지 않고 지침 md 전체에서 복사용 마크업 태그를 금지한다.
  if (/<(!doctype|html|svg|style|canvas|script)\b/i.test(text)) hits.push(name);
  return hits;
}

function main() {
  const map = read("curriculum/map.md");
  const { modules, problems, refs, warnings } = parseCurriculum(map);
  for (const w of warnings) console.warn(`WARN ${w}`);
  errors.push(...problems);
  const src = checkSources(map, refs, new Date());
  errors.push(...src.problems);
  for (const w of src.warnings) console.warn(`WARN ${w}`);
  if (modules.size === 0) errors.push("모듈을 찾지 못함");

  const files = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean);
  for (const f of findVisualAssets(files)) errors.push(`미리 만든 시각 자료 금지: ${f}`);
  for (const f of files.filter((x) => x.endsWith(".md") && !x.startsWith("docs/build/") && existsSync(join(root, x)))) for (const n of findTemplateMarkup(f, read(f))) errors.push(`복사용 마크업 금지: ${n}`);

  for (const p of [".claude/settings.json", "learner-template/state.json"]) {
    try { JSON.parse(read(p)); } catch (e) { errors.push(`${p}: JSON 오류 ${e.constructor.name}`); }
  }
  if (!existsSync(join(root, "learner-template/log.md"))) errors.push("learner-template/log.md 없음");
  for (const s of readdirSync(join(root, ".claude/skills"))) {
    if (statSync(join(root, ".claude/skills", s)).isDirectory() && !existsSync(join(root, ".claude/skills", s, "SKILL.md"))) errors.push(`스킬 ${s}: SKILL.md 없음`);
  }
  if (!read(".gitignore").split("\n").includes("learner/")) errors.push(".gitignore에 learner/ 없음");

  if (errors.length) { console.error(errors.map((e) => `FAIL ${e}`).join("\n")); process.exit(1); }
  console.log(`OK 모듈 ${modules.size}개, 출처 키 ${refs.size}개, 파일 ${files.length}개 검사`);
}

main();
