# 커리큘럼 지도

큰 윤곽만 둔다. 강의 내용은 여기 없다. 튜터가 세션마다 학습자의 수준·목표·관심 국가에 맞춰 조사하고 만든다.

확인 기준일: 2026-11-14

- 기본 순서는 F → M → S → R → C → X다. 선수 관계만 지키면 학습자의 목표에 맞춰 순서를 바꿔도 된다.
- 목표 수준은 그 모듈을 마쳤다고 볼 최소 수준이다. 수준의 뜻은 [tutor/assessment.md](../tutor/assessment.md)에 있다.
- 모듈 id는 진도 기록의 키다. 바꾸면 `learner/state.json`이 깨지므로, 고칠 때는 새 id를 만든다.
- 「국내 근거」는 한국 기업이 한국에서 지는 의무와 한국 공공기관 자료, 「글로벌 비교」는 진출국·국제 기준과 학술 근거다. 대괄호 키는 맨 아래 「출처」 절에 있다. 지도에는 신고 금액 기준·기한·지원 금액·국가별 수치를 적지 않는다. 그런 값은 튜터가 세션에서 공식 출처로 확인한다([tutor/sources.md](../tutor/sources.md)).
- 「경계·연결」의 주제는 그 go-* 워크스페이스가 주인이다. 여기서는 연결만 한다.
- `node tools/check.mjs`로 형식·선수 관계·출처를 검사한다(리포 관리자용, 학습자에게는 필요 없다).

## F · 기초

### F1 · 기업은 왜, 어떤 순서로 해외로 가는가
- 선수: 없음
- 핵심 질문: 같은 제품을 국내에서 더 파는 대신 해외로 나가는 이유는 무엇이고, 기업은 왜 가까운 시장부터 조금씩 들어가는가?
- 목표: Explain — 진출 동기(시장·효율·자원·전략 자산)와 단계적 국제화를 자기 회사 사례로 설명한다.
- 만들어 볼 것: 학습자 회사(또는 관심 기업)의 국제화 경로를 Uppsala 모델과 OLI 틀로 각각 그려 비교하기
- 국내 근거: 한국 기업의 해외직접투자 흐름을 국가·업종별로 보는 공식 통계 [K87] [K88]
- 글로벌 비교: Uppsala 모델 [A1] [A2], 절충 이론(OLI) [A3] [A4], 세계 투자 동향 [G37]

### F2 · 나라 사이의 거리
- 선수: F1
- 핵심 질문: 지도에서 가까운 나라가 사업상으로는 더 먼 이유는 무엇인가?
- 목표: Apply — 관심 국가 하나를 제도·문화·행정·지리·경제 거리로 진단하고, 외국 기업이라서 생기는 불리함(정당성 확보)을 짚는다.
- 만들어 볼 것: 한국과 관심 국가 두 곳의 거리 비교표(어느 거리가 사업에 가장 크게 걸리는지 표시)
- 국내 근거: KOTRA 국가·지역 정보와 국별 진출전략 [K80] [K81]
- 글로벌 비교: CAGE 거리 틀 [A8], 제도적 거리 측정 [A9], 문화 거리와 진출 방식 [A12], 다국적 기업의 정당성 [A11]
- 경계·연결: 환율·국제경제 이론은 go-economics

### F3 · 들어가는 방법의 지도
- 선수: F1
- 핵심 질문: 수출에서 현지 법인까지, 진출 방식마다 무엇을 얻고 무엇을 내주는가?
- 목표: Explain — 간접·직접 수출, 라이선스·프랜차이즈, 합작투자(JV), 인수, 신설 법인, 지점, 연락사무소를 통제·자원 투입·위험으로 구분해 설명한다.
- 만들어 볼 것: 진출 방식 사다리 그림에 학습자 회사가 지금 있는 칸과 다음 칸 표시하기
- 국내 근거: 외국환거래법의 해외직접투자 정의(현지 법인과 해외지사의 구분) [K2], 같은 법 시행령의 해외직접투자 범위 [K10] [K11]
- 글로벌 비교: 거래비용 관점의 진출 방식 [A5], 일본의 진출 형태 구분(현지 법인·지점·연락사무소) [G21]
- 경계·연결: 수출 거래의 무역 조건·신용장과 대금 결제·통관·운송 실무는 go-scm

### F4 · 두 나라의 규칙을 층으로 나누기
- 선수: F3
- 핵심 질문: 해외에 나가는 한국 기업에는 한국 법과 진출국 법이 각각 무엇을 요구하는가?
- 목표: Explain — 한국 쪽 의무(외환 신고, 수출통제, 해외 뇌물 금지, 국외 자료 제출)와 진출국 쪽 규칙(외국인투자 심사, 법인 설립, 노동, 세금)을 층으로 나눠 설명한다.
- 만들어 볼 것: 「한국에서 할 일 / 진출국에서 할 일 / 둘 다」 세 칸 표를 학습자 사례로 채우기
- 국내 근거: 외국환거래법 자본거래 신고 의무 [K4], 대외무역법 전략물자 수출허가 의무 [K15], 국제상거래뇌물방지법 형사책임 [K20], 국제조세조정법의 해외현지법인 자료 제출 의무 [K38]
- 글로벌 비교: 중국 외상투자법 [G26], 베트남 투자법 [G24], 미국 외국인투자 심사(CFIUS) [G20]

## M · 시장과 진출 방식

### M1 · 나라 고르기
- 선수: F2
- 핵심 질문: 후보 국가 여럿 중 어디를 먼저 들어갈지, 무엇을 기준으로 어떻게 좁히는가?
- 목표: Evaluate — 시장 매력도·진입 장벽·국가 리스크·제재 노출·조세조약 체결 여부를 가중치로 비교해 1순위 국가를 근거와 함께 고른다.
- 만들어 볼 것: 후보 3개국 스크리닝 표(가중치는 학습자가 정하고 이유를 적는다)
- 국내 근거: 외교부 여행경보 제도와 국가별 안전 정보 [K92] [K95], KOTRA 국별 진출전략 [K81], 국세청 외국 세무 정보 [K115]
- 글로벌 비교: World Bank B-READY [G38], UNCTAD 세계투자보고서 [G37], UN 안보리 제재 통합 목록 [G36]
- 경계·연결: 조세조약 조문 적용과 원천세 계산은 go-tax. 거점 위기 대응·BCP는 go-resilience. 전략물자 수출허가 실무는 go-scm

### M2 · 시장 조사의 자료원
- 선수: M1
- 핵심 질문: 직접 가 보기 전에 그 나라 시장을 어떤 공식 자료로 얼마나 알 수 있는가?
- 목표: Apply — 무역 통계·해외직접투자 통계·해외시장 뉴스를 찾아 관심 국가의 시장 규모 추정과 경쟁 지형을 출처와 함께 정리한다.
- 만들어 볼 것: 관심 국가 한 쪽짜리 시장 메모(숫자마다 발표 기관·기준 연도)
- 국내 근거: 한국무역협회 무역통계 [K97] [K98], 한국수출입은행 해외투자통계 [K87], KOTRA 해외시장뉴스 [K79]
- 글로벌 비교: 국제 무역·투자 통계 원천 — UN Comtrade [G45], UNCTADstat [G46], WTO Stats [G47]
- 경계·연결: 현지화 마케팅 전략은 go-marketing

### M3 · 진출 방식 결정
- 선수: F3, M1
- 핵심 질문: 같은 나라라도 왜 어떤 회사는 대리점으로, 어떤 회사는 법인으로 들어가는가?
- 목표: Evaluate — 통제 필요, 투입할 자원, 기술·브랜드 보호, 철수 비용, 현지 규제를 따져 진출 방식 둘 이상을 비교해 고른다.
- 만들어 볼 것: 학습자 회사의 진출 방식 결정표와 「이 조건이 바뀌면 방식을 바꾼다」 한 줄
- 국내 근거: 해외직접투자와 해외지사의 법적 구분 [K2] [K10], 해외 법인 투자 시 신고 절차 안내 [K59]
- 글로벌 비교: 거래비용 관점의 진출 방식 [A5], 문화 거리와 진출 방식 [A12], 중국 외국인투자 네거티브 리스트 [G27]
- 경계·연결: 포트폴리오·성장 전략과 해외 M&A 전략은 go-strategy. 인수·JV 지분 가치평가는 go-valuation

### M4 · 파트너와 대리인 고르기
- 선수: M3
- 핵심 질문: 현지 대리점·유통사·JV 파트너를 믿을 수 있는지 계약 전에 무엇으로 확인하는가?
- 목표: Apply — 파트너 후보 하나에 대해 실사 항목(소유 구조, 공무원 관계, 제재 해당, 평판, 인권·환경 위험)을 정하고 빨간 신호를 판정한다.
- 만들어 볼 것: 현지 파트너 실사 체크리스트(빨간 신호와 그때 할 일 포함)
- 국내 근거: 국제상거래뇌물방지법의 외국공무원 범위와 양벌규정 [K22] [K21], KOTRA 해외지사화 사업 [K74]
- 글로벌 비교: OECD 다국적기업 책임경영 가이드라인 [G8], 영국 뇌물법 지침(제3자 실사) [G6], OFAC 지분 합산 규칙(50 Percent Rule) [G31]
- 경계·연결: 준법 프로그램 설계와 계약법 일반은 go-compliance-and-legal. 공급망 인권·환경 실사 규제는 go-esg

## S · 현지 법인 설립과 운영

### S1 · 해외직접투자 신고
- 선수: F4
- 핵심 질문: 현지 법인에 돈을 보내기 전에 한국에서 누구에게 무엇을 신고해야 하는가?
- 목표: Apply — 처음 보는 투자 사례에서 해외직접투자 해당 여부, 신고 기관(지정거래외국환은행), 신고 시점과 순서를 판단한다.
- 만들어 볼 것: 학습자 회사의 첫 투자 송금까지 국내 절차 흐름도(은행·서류·시점, 기준은 그 세션에서 확인)
- 국내 근거: 외국환거래법 해외직접투자 정의와 자본거래 신고 [K2] [K4], 시행령의 해외직접투자 범위 [K10], 외국환거래규정 해외직접투자 절과 신고 [K47] [K48] [K50] [K51], 위반 시 제재 [K5] [K8], 금융감독원 신고 절차 안내 [K59], 2026-12-03 시행 예정 외국환거래법 개정(자본거래 정의 정비 등) [K127]
- 글로벌 비교: 중국 외상투자법의 정보 보고 [G26], 베트남 투자등록 절차 [G25]
- 경계·연결: 외화 차입·자본거래 일반은 go-finance

### S2 · 투자 뒤에 할 보고와 변경
- 선수: S1
- 핵심 질문: 설립 뒤 증자·대여·지분 변경·결산 때 한국에 무엇을 다시 알려야 하는가?
- 목표: Apply — 투자 이후 사건(증자, 지분 양도, 현지 법인 대여, 연간 결산)마다 필요한 사후관리 보고를 찾아 일정표에 넣는다.
- 만들어 볼 것: 현지 법인 1년치 국내 보고 캘린더(항목별 근거 조항과 확인 시점)
- 국내 근거: 외국환거래규정 사후관리 보고 [K53] [K54], 투자금 회수 [K52], 금융감독원 위반 사례집(2019, 2023·2025 규정 개정 전 사례) [K64], 국제조세조정법 해외현지법인 자료 제출과 국세청 부속서류 고시 [K38] [K39] [K116]
- 글로벌 비교: 미국의 외국인 소유 법인 정보 신고(Form 5472) [G19]

### S3 · 현지 법인 형태와 설립 절차
- 선수: S1, M3
- 핵심 질문: 진출국에서 법인·지점·연락사무소 중 무엇으로, 어떤 순서로 세우고, 지점·사무소라면 한국에 무엇을 따로 신고하는가?
- 목표: Evaluate — 관심 국가 하나에서 설립 형태 둘 이상을 책임 범위·설립 기간·허가·외국인 지분 제한·철수 쉬움으로 비교해 고르고, 설립 순서를 짠다. 지점·사무소를 고르면 해외지사 설치 신고 → 설치 완료 보고 → 폐쇄 신고의 국내 절차를 짚는다.
- 만들어 볼 것: 관심 국가 설립 경로표(형태 비교, 현지 등록 단계, 한국 신고와의 순서 맞물림 — 현지 법인은 해외직접투자 신고, 지점·사무소는 해외지사 신고)
- 국내 근거: 외국환거래규정 해외지사 설치 신고와 사후관리 [K122], 해외지사 경비를 자본거래로 정비하는 시행 예정 개정 [K127], 해외직접투자 신고 [K50], 대비 자료로 외국인투자촉진법의 투자 신고 [K29] [K30]
- 글로벌 비교: 미국 델라웨어 법인 설립 [G18], 일본 진출 형태와 상업 등기 [G21] [G22], 싱가포르 회사 등록 [G23], 베트남 투자법·투자등록 [G24] [G25], 중국 외상투자법과 네거티브 리스트 [G26] [G27], 독일 GmbH 설립 [G28], EU 외국인투자 심사(현행 규정과 적용 예정 규정) [G29]
- 경계·연결: 현지 개인정보·데이터 이전 규제는 go-security

### S4 · 본사와 현지 법인 사이의 지배구조
- 선수: S3
- 핵심 질문: 현지 법인장에게 어디까지 맡기고, 본사는 무엇을 언제 보고받아야 하는가?
- 목표: Apply — 학습자 회사의 현지 법인에 대해 이사회 구성, 결정 권한 위임 범위, 본사 보고 종류를 정한다.
- 만들어 볼 것: 현지 법인 결정 권한 표(현지 결정 / 본사 승인 / 본사 보고)와 보고 목록
- 국내 근거: 상법의 자회사 정의와 모회사 감사의 자회사 조사권 [K126], 외국환거래규정 사후관리의 연간 보고(본사가 받아야 할 현지 법인 실적) [K53], 국제조세조정법의 해외현지법인 자료 제출 [K38]
- 글로벌 비교: 다국적 기업의 정당성과 본사-자회사 관계 [A11], OECD 다국적기업 가이드라인 [G8]
- 경계·연결: 해외 자회사 외화 환산·연결 회계는 go-accounting. 위임전결과 내부통제 체계는 go-control. 월간 경영 보고·예산은 go-controllership. 해외 자회사 내부회계관리는 go-icfr

### S5 · 현지 노무와 주재원
- 선수: S3
- 핵심 질문: 현지 직원을 뽑고 한국 직원을 보낼 때 어느 나라 법이 적용되고, 무엇을 확인해야 하는가?
- 목표: Apply — 파견·출장·현지 채용 사례마다 적용 법과 사회보험 처리(사회보장협정, 산재보험 해외파견 특례)를 판단하고 현지에서 확인할 질문을 만든다.
- 만들어 볼 것: 주재원 파견 체크리스트와 현지 채용 시 현지 노동법 확인 질문 목록
- 국내 근거: 국민연금공단 사회보장협정 안내 [K68] [K69], 산업재해보상보험법 해외파견자 특례 [K41], 근로복지공단 해외파견자 적용 특례 [K99], 국제사법의 근로계약 준거법 [K32]
- 글로벌 비교: ILO 일터의 기본 원칙과 권리 선언 [G39], ILO 기본 협약 [G40]
- 경계·연결: 인사 제도·국내 노동법·주재원 보상 설계는 go-hr

### S6 · 돈이 오가는 길
- 선수: S1
- 핵심 질문: 본사에서 현지로 간 돈은 어떤 길로 돌아오고, 길마다 한국 신고와 세금 질문이 어떻게 달라지는가?
- 목표: Apply — 자본금·대여금·배당·로열티·서비스 대가 중 회수 경로를 고르고, 경로마다 국내 신고·보고와 「조약 확인 필요」 지점, 환위험이 생기는 지점을 표시한다.
- 만들어 볼 것: 본사-현지 법인 자금 흐름도(경로별 신고·보고, 조약 확인 필요, 환위험 표시)
- 국내 근거: 외국환거래규정 해외직접투자 수단과 투자금 회수 [K49] [K52], 한국은행 외환거래 신고 안내 [K66], 국세청 국제거래정보 통합보고서 [K113]
- 글로벌 비교: OECD 이전가격 지침(회수 경로의 가격 문제) [G9]
- 경계·연결: 조세조약상 원천세와 외국납부세액은 go-tax. 환위험 헤지 상품과 자금 조달 구조는 go-finance. 환율 결정 이론은 go-economics

### S7 · 이전가격의 기본 감각
- 선수: S6
- 핵심 질문: 본사와 현지 법인이 서로 매기는 값은 왜 「남남이라면 매겼을 값」이어야 하는가?
- 목표: Explain — 정상가격 원칙과, 본사-자회사 거래가 생기면 어떤 국내 자료 제출 의무와 사전 상담 경로가 생기는지 설명한다.
- 만들어 볼 것: 학습자 회사 그룹 내 거래 목록과 거래마다 「정상가격 질문」 한 줄
- 국내 근거: 국제조세조정법 정상가격 원칙과 국제거래 자료 제출 [K35] [K37], 국세청 국제거래정보 통합보고서와 정상가격 사전 상담 [K113] [K112]
- 글로벌 비교: OECD 이전가격 지침 [G9]
- 경계·연결: 이전가격 방법론·문서 작성·세무조정은 go-tax

### S8 · 철수와 청산, 국내 복귀
- 선수: S2, S3
- 핵심 질문: 현지 법인이나 지점·사무소를 접거나 한국으로 돌아올 때 무엇을 정리하고, 어떤 지원이 있는가?
- 목표: Apply — 철수 사례에서 청산 순서(현지 청산, 잔여재산 회수, 국내 청산 보고, 지점·사무소는 폐쇄 신고)와 국내 복귀 지원 요건을 확인할 항목을 정한다.
- 만들어 볼 것: 현지 법인 철수 단계표(현지 / 한국 / 확인 기관)
- 국내 근거: 외국환거래규정 투자금 회수와 청산 [K52], 해외지사 폐쇄 [K122], 해외진출기업복귀법 정의와 지원 [K24] [K26], 국내복귀기업 지원 대상 안내 [K106]
- 글로벌 비교: 베트남 투자법 제36조 투자 사업의 종료 [G49], 중국 회사법 제12장 회사의 해산과 청산 [G48]

## R · 국제 거래 규범과 리스크

### R1 · 국제 계약의 쟁점
- 선수: F4
- 핵심 질문: 해외 거래처와 계약할 때 어느 나라 법으로, 어디서 분쟁을 풀지 왜 미리 정해야 하는가?
- 목표: Apply — 해외 계약 초안 하나에서 준거법·분쟁 해결(소송·중재)·집행 가능성 조항을 찾아 위험을 짚고 바꿀 방향을 정한다.
- 만들어 볼 것: 해외 계약 쟁점 점검표(준거법, 분쟁 해결 장소와 방법, 집행 가능 여부, CISG 적용 여부)
- 국내 근거: 국제사법 당사자 자치와 객관적 연결 [K31] [K32], 중재법 적용 범위와 외국 중재판정 [K33] [K34], 대한상사중재원 중재 안내 [K109] [K110]
- 글로벌 비교: CISG와 가입 현황 [G11] [G12], 뉴욕협약과 가입 현황 [G13] [G14], UNIDROIT 국제상사계약원칙 [G15], ICC 중재규칙 [G16]
- 경계·연결: 계약법 일반·분쟁·소송 대응은 go-compliance-and-legal

### R2 · 해외 뇌물 방지
- 선수: F4
- 핵심 질문: 현지 인허가를 빨리 받으려고 대리인이 「수수료」를 달라고 할 때, 어느 나라 법이 회사에 책임을 묻는가?
- 목표: Apply — 해외 현장 장면(급행료, 대리인 수수료, 접대, 기부)마다 한국·미국·영국 법의 적용 가능성과 회사 책임을 판단한다.
- 만들어 볼 것: 해외 현장 뇌물 위험 장면표(장면, 적용 가능한 법, 회사가 할 일)
- 국내 근거: 국제상거래뇌물방지법 형사책임·양벌규정·외국공무원 범위 [K20] [K21] [K22]
- 글로벌 비교: 미국 FCPA 조항과 해설서 [G1] [G2] [G3] [G4], 영국 뇌물법과 지침 [G5] [G6], OECD 외국공무원 뇌물방지협약 [G7]
- 경계·연결: 준법 프로그램(CP) 설계와 법 해석 심화는 go-compliance-and-legal

### R3 · 수출통제와 경제제재
- 선수: M1
- 핵심 질문: 내 제품이나 거래 상대가 통제·제재 대상인지 어떻게 알고, 해당하면 무엇이 달라지는가?
- 목표: Apply — 거래 사례에서 확인할 것(품목 판정, 최종 사용자·국가, 제재 목록, 소유 지분 규칙)과 조회 기관을 정한다. 해당 여부의 결론은 공식 판정과 전문가로 넘긴다.
- 만들어 볼 것: 신규 해외 거래 제재·수출통제 스크리닝 순서도(조회 기관과 멈출 지점)
- 국내 근거: 외국환거래법의 국제평화·안전 유지를 위한 지급·수령 허가(한국의 경제제재 근거)와 그 대상을 정하는 재정경제부 고시(확인 필요) [K123] [K124] [K128], 대외무역법 전략물자와 수출허가·판정 [K14] [K15] [K16], 무역안보관리원과 YESTRADE [K17] [K119] [K120], 위반 시 벌칙 [K18]
- 글로벌 비교: 미국 OFAC 제재 목록과 지분 합산 규칙(50 Percent Rule) [G30] [G31], 미국 수출관리규정(EAR) [G32], EU 제재 [G33] [G34], UN 안보리 제재 목록 [G36], 바세나르 체제 [G35]
- 경계·연결: 전략물자 수출허가 신청 실무와 통관은 go-scm

### R4 · 진출 지원 제도 활용
- 선수: M2
- 핵심 질문: 처음 해외로 나가는 회사가 혼자 하지 않아도 되는 일은 무엇이고, 어디에 도움을 청하는가(정보·거점·보험·정책금융)?
- 목표: Apply — 학습자 회사의 진출 단계(조사, 거점, 투자, 위험 대비, 복귀)마다 쓸 수 있는 공공 지원 제도를 찾아 신청 요건 확인 항목을 정한다.
- 만들어 볼 것: 진출 단계별 지원 제도 지도(제도, 운영 기관, 확인할 요건과 시점)
- 국내 근거: KOTRA 지사화 사업·수출바우처·투자진출 상담 [K74] [K76] [K77], 수출바우처 포털 [K84], 한국수출입은행 해외사업 관련 대출(정책금융) [K125], 한국무역보험공사 해외투자보험 [K89], 외교부 해외안전여행 [K92], 국내복귀 지원 [K107]
- 글로벌 비교: 자국 기업의 해외 진출을 돕는 다른 나라 기관 — 일본 JETRO 해외 진출 지원과 NEXI 해외투자보험 [G42] [G41], 영국 UK Export Finance [G43], 미국 EXIM [G44]

## C · 문화와 조직

### C1 · 문화 차이와 일하는 방식
- 선수: F2
- 핵심 질문: 현지 동료와 회의·결정·피드백 방식이 엇갈릴 때, 그것이 문화 차이인지 개인 차이인지 어떻게 가르는가?
- 목표: Apply — 문화 차원 틀로 현지 협업 장면 하나를 해석하고, 틀을 고정관념으로 쓰는 실수를 짚어 업무 방식 조정안을 만든다.
- 만들어 볼 것: 현지 팀과의 업무 방식 합의안 초안(회의, 결정, 보고, 피드백)
- 국내 근거: KOTRA 국가·지역 정보의 비즈니스 관행 자료 [K80]
- 글로벌 비교: Hofstede 문화 차원 [A6], GLOBE 프로젝트 [A7], 문화 거리 [A12]
- 경계·연결: 이문화 협상 기술은 go-leadership-negotiation

### C2 · 글로벌 조직 설계
- 선수: C1, S4
- 핵심 질문: 본사의 표준을 밀어붙일 곳과 현지에 맞출 곳은 어떻게 나누고, 외국 기업이라서 생기는 불리함은 조직으로 어떻게 줄이는가?
- 목표: Evaluate — 통합-현지화 틀로 기능(제품, 영업, 인사, 재무)별로 본사 표준과 현지 재량을 나누고 조직 형태를 고른다.
- 만들어 볼 것: 기능별 통합-현지화 배치도와 학습자 회사에 맞는 조직 형태 선택 근거
- 국내 근거: 조직 설계를 정하는 국내 법 근거는 없어, 한국 기업의 진출 사례를 담은 KOTRA 국별 진출전략으로 대신한다 [K81]
- 글로벌 비교: 통합-현지화 틀 [A10], 다국적 기업의 정당성 [A11]

## X · 졸업

### X1 · 한 국가 진출 검토서
- 선수: M3, S2, S3, S5, S7, R2, R3, R4
- 핵심 질문: 대표에게 「이 나라에 이 방식으로 들어가자」고 올릴 검토서에는 무엇이 들어가야 하는가?
- 목표: Develop — 실제로 검토 중이거나 관심 있는 한 국가에 대해, 근거와 확인 시점이 달린 진출 검토서 초안을 만든다.
- 만들어 볼 것: 진출 검토서 초안 — 여섯 절: ① 국가·진출 방식 비교 ② 국내 신고·보고 체크리스트 ③ 현지 설립 경로 ④ 운영 리스크(노무·외환·이전가격·반부패·제재) ⑤ 지원 제도 ⑥ 확인 필요 목록(누가·어디서·언제 확인할지)
- 국내 근거: 해외직접투자 신고와 사후관리 [K50] [K53], 해외지사 신고 [K122], 지원 제도 [K74] [K89]
- 글로벌 비교: 진출국 설립·투자 심사 출처 중 학습자가 고른 나라의 것 [G18] [G21] [G23] [G24] [G26] [G28]

## 출처

조회일은 모두 원문을 열어 확인한 날이다. 확인 방식(원문·검색 요약)과 조문 원문 대조 기록은 구축 원장에 있다(`docs/build/sources-ledger.md`). `변동: 잦음`은 개정·갱신이 잦아 튜터가 말할 때 확인 시점을 붙여야 하는 출처다.

### 국내
- [K2] 외국환거래법 제3조 제1항 제18호(해외직접투자 정의) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=57324&lang=KOR> 조회일 2026-11-14
- [K4] 외국환거래법 제18조(자본거래의 신고 등) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=57324&lang=KOR> 조회일 2026-11-14
- [K5] 외국환거래법 제19조(경고 및 거래정지 등) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=57324&lang=KOR> 조회일 2026-11-14
- [K8] 외국환거래법 제32조(과태료) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=57324&lang=KOR> 조회일 2026-11-14
- [K10] 외국환거래법 시행령 제8조(해외직접투자) 제1항 <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=74027&lang=KOR> 조회일 2026-11-14
- [K11] 외국환거래법 시행령 제8조(해외직접투자) 제2항 <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=74027&lang=KOR> 조회일 2026-11-14
- [K14] 대외무역법 제19조(전략물자) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=71487&lang=KOR> 조회일 2026-11-14 변동: 잦음
- [K15] 대외무역법 제19조의2(수출허가)~제19조의5(중개허가) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=71487&lang=KOR> 조회일 2026-11-14 변동: 잦음
- [K16] 대외무역법 제20조(전문판정)·제20조의2(자가판정) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=71487&lang=KOR> 조회일 2026-11-14 변동: 잦음
- [K17] 대외무역법 제25조(무역안보관리원의 설립 등) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=71487&lang=KOR> 조회일 2026-11-14
- [K18] 대외무역법 제53조(벌칙)·제57조(양벌규정) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=71487&lang=KOR> 조회일 2026-11-14
- [K20] 같은 법 제3조(뇌물공여자 등의 형사책임) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=59810&lang=KOR> 조회일 2026-11-14
- [K21] 같은 법 제4조(양벌규정) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=59810&lang=KOR> 조회일 2026-11-14
- [K22] 같은 법 제2조(외국공무원등의 범위) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=59810&lang=KOR> 조회일 2026-11-14
- [K24] 해외진출기업의 국내복귀 지원에 관한 법률 제2조(정의) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=73866&lang=KOR> 조회일 2026-11-14
- [K26] 같은 법 제11조~제15조(조세감면·자금·입지·인력·해외사업장 청산 지원) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=73866&lang=KOR> 조회일 2026-11-14
- [K29] 외국인투자 촉진법 제2조 제1항 제4호(외국인투자 정의) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=69678&lang=KOR> 조회일 2026-11-14
- [K30] 외국인투자 촉진법 제5조(외국인투자 신고)·제6조(외국인투자 허가 등) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=69678&lang=KOR> 조회일 2026-11-14
- [K31] 국제사법 제45조(당사자 자치) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=60196&lang=KOR> 조회일 2026-11-14
- [K32] 국제사법 제46조(객관적 연결)·제48조(근로계약) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=60196&lang=KOR> 조회일 2026-11-14
- [K33] 중재법 제2조(적용 범위) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=71405&lang=KOR> 조회일 2026-11-14
- [K34] 중재법 제37조(중재판정의 승인과 집행)·제39조(외국 중재판정) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=71405&lang=KOR> 조회일 2026-11-14
- [K35] 국제조세조정에 관한 법률 제7조(정상가격에 의한 결정 및 경정)·제8조(정상가격의 산출방법) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=72667&lang=KOR> 조회일 2026-11-14
- [K37] 같은 법 제16조(국제거래에 대한 자료 제출의무) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=72667&lang=KOR> 조회일 2026-11-14
- [K38] 같은 법 제58조(해외현지법인 등에 대한 자료 제출의무) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=72667&lang=KOR> 조회일 2026-11-14
- [K39] 같은 법 제91조(해외현지법인 등의 자료 제출의무 불이행 등에 대한 과태료) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=72667&lang=KOR> 조회일 2026-11-14
- [K41] 산업재해보상보험법 제121조(국외의 사업에 대한 특례)·제122조(해외파견자에 대한 특례) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=73718&lang=KOR> 조회일 2026-11-14
- [K47] 외국환거래규정(재정경제부 고시) 제9장 제1절 해외직접투자 — 고시 제2026-110호 현행 전문 <https://www.mofe.go.kr/lw/denm/detailTbDenmView.do?searchBbsId1=MOSFBBS_000000000120&searchNttId1=MOSF_000000000079810&menuNo=7090200> 조회일 2026-11-14 변동: 잦음
- [K48] 외국환거래규정 제9-1조(신고등) <https://www.mofe.go.kr/lw/denm/detailTbDenmView.do?searchBbsId1=MOSFBBS_000000000120&searchNttId1=MOSF_000000000079810&menuNo=7090200> 조회일 2026-11-14 변동: 잦음
- [K49] 외국환거래규정 제9-1조의2(해외직접투자의 수단) <https://www.mofe.go.kr/lw/denm/detailTbDenmView.do?searchBbsId1=MOSFBBS_000000000120&searchNttId1=MOSF_000000000079810&menuNo=7090200> 조회일 2026-11-14 변동: 잦음
- [K50] 외국환거래규정 제9-5조(해외직접투자의 신고 등) <https://www.mofe.go.kr/lw/denm/detailTbDenmView.do?searchBbsId1=MOSFBBS_000000000120&searchNttId1=MOSF_000000000079810&menuNo=7090200> 조회일 2026-11-14 변동: 잦음
- [K51] 외국환거래규정 제10-11조(거래외국환은행 지정 등) <https://www.mofe.go.kr/lw/denm/detailTbDenmView.do?searchBbsId1=MOSFBBS_000000000120&searchNttId1=MOSF_000000000079810&menuNo=7090200> 조회일 2026-11-14 변동: 잦음
- [K52] 외국환거래규정 제9-4조(투자금의 회수)·제9-6조(해외직접투자사업의 청산) <https://www.mofe.go.kr/lw/denm/detailTbDenmView.do?searchBbsId1=MOSFBBS_000000000120&searchNttId1=MOSF_000000000079810&menuNo=7090200> 조회일 2026-11-14 변동: 잦음
- [K53] 외국환거래규정 제9-9조(사후관리) 제1항 <https://www.mofe.go.kr/lw/denm/detailTbDenmView.do?searchBbsId1=MOSFBBS_000000000120&searchNttId1=MOSF_000000000079810&menuNo=7090200> 조회일 2026-11-14 변동: 잦음
- [K54] 외국환거래규정 제9-9조 제2항 이하·제9-2조의2 <https://www.mofe.go.kr/lw/denm/detailTbDenmView.do?searchBbsId1=MOSFBBS_000000000120&searchNttId1=MOSF_000000000079810&menuNo=7090200> 조회일 2026-11-14 변동: 잦음
- [K59] 금융감독원 외국환거래안내 「해외 법인(역외금융회사 등)에 투자를 하는 경우」 <https://www.fss.or.kr/fss/job/tyFetactInfo/view.do?dlngSlno=10&menuNo=200473&pageIndex=1> 조회일 2026-11-14 변동: 잦음
- [K64] 금융감독원 「외국환거래 위반사례집」(2019, 이후 규정 개정 전 사례) <https://www.fss.or.kr/fss/bbs/B0000157/view.do?nttId=20764&menuNo=200167> 조회일 2026-11-14
- [K66] 한국은행 외환거래심사 안내·외환거래별 신고 <https://www.bok.or.kr/portal/main/contents.do?menuNo=200404> 조회일 2026-11-14 변동: 잦음
- [K68] 국민연금공단 사회보장협정 개요 <https://www.nps.or.kr/pnsinfo/sclsmise/getOHAF0126M0.do> 조회일 2026-11-14
- [K69] 국민연금공단 사회보장협정 국가별 안내 <https://www.nps.or.kr/pnsinfo/sclsmise/getOHAF0130M0.do> 조회일 2026-11-14
- [K74] KOTRA 무역투자24 「지사화 사업」 <https://www.kotra.or.kr/subList/20000005984/subhome/bizIntro/selectBizDetail.do?bizClCd=ESPUDMJH> 조회일 2026-11-14 변동: 잦음
- [K76] KOTRA 무역투자24 「수출바우처」 <https://www.kotra.or.kr/subList/20000005984/subhome/bizIntro/selectBizDetail.do?bizClCd=ESIOIPIP> 조회일 2026-11-14 변동: 잦음
- [K77] KOTRA 무역투자24 문의·상담(온라인 투자 진출 상담) <https://www.kotra.or.kr/subList/20000006014?targetId=1> 조회일 2026-11-14
- [K79] KOTRA 해외경제정보드림(해외시장뉴스) <https://dream.kotra.or.kr/dream/index.do> 조회일 2026-11-14
- [K80] KOTRA 해외시장뉴스 국가지역정보 <https://dream.kotra.or.kr/kotranews/cms/com/index.do?MENU_ID=220> 조회일 2026-11-14
- [K81] KOTRA 해외경제정보드림 국별진출전략 <https://dream.kotra.or.kr/dream/cms/com/index.do?MENU_ID=3320> 조회일 2026-11-14
- [K84] 수출지원기반활용사업 수출바우처 사업 안내 <https://www.exportvoucher.com/portal/bizinfo/voucher_01> 조회일 2026-11-14 변동: 잦음
- [K87] 한국수출입은행 해외투자통계 <https://stats.koreaexim.go.kr/main.do> 조회일 2026-11-14
- [K88] 한국수출입은행 해외직접투자통계 변동추세 <https://stats.koreaexim.go.kr/sub/totalStatistics.do> 조회일 2026-11-14
- [K89] 한국무역보험공사 해외투자보험 <https://www.ksure.or.kr/rh-kr/cntnts/i-210/web.do> 조회일 2026-11-14 변동: 잦음
- [K92] 외교부 해외안전여행 여행경보제도 <https://www.0404.go.kr/bbs/contsPst/MST0000000000127/27/detail> 조회일 2026-11-14
- [K95] 외교부 해외안전여행 국가/지역별 정보 <https://www.0404.go.kr/ntnSafetyInfo/list> 조회일 2026-11-14 변동: 잦음
- [K97] 한국무역협회 K-stat 무역통계 <https://stat.kita.net/> 조회일 2026-11-14
- [K98] 한국무역협회 K-stat 통계가이드 <https://stat.kita.net/stat/guide/guideMain.screen> 조회일 2026-11-14
- [K99] 근로복지공단 산재·고용보험 적용특례(해외파견자) <https://www.comwel.or.kr/comwel/paym/join/excp.jsp> 조회일 2026-11-14
- [K106] Invest KOREA 국내복귀기업지원 지원대상 <https://www.investkorea.org/ik-kr/cntnts/i-237/web.do> 조회일 2026-11-14 변동: 잦음
- [K107] Invest KOREA 국내복귀기업 지원 신청 <https://www.investkorea.org/ik-kr/cntnts/i-2202/web.do> 조회일 2026-11-14 변동: 잦음
- [K109] 대한상사중재원 중재 안내 <https://www.kcab.or.kr/intervention/intervention_info.do> 조회일 2026-11-14
- [K110] KCAB International Arbitration Rules 2026 <https://www.kcabinternational.or.kr/arbitration/arbitration_rules.do> 조회일 2026-11-14
- [K112] 국세청 상호합의·APA(정상가격 산출방법 사전승인) 사전상담 <https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=135741&cntntsId=109139> 조회일 2026-11-14
- [K113] 국세청 국제거래정보 통합보고서 <https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2514&cntntsId=7820> 조회일 2026-11-14
- [K115] 국세청 국제조세정보 외국 세무정보 <https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2510&cntntsId=7817> 조회일 2026-11-14
- [K116] 국세청 고시 「해외현지법인 및 지사 관련 부속서류 제출 대상과 서식의 지정 고시」 <https://nts.go.kr/nts/na/ntt/selectNttInfo.do?mi=&nttSn=40598> 조회일 2026-11-14
- [K119] YESTRADE 수출허가 안내 개요 <https://www.yestrade.go.kr/export-permissions/guide/overview> 조회일 2026-11-14 변동: 잦음
- [K120] YESTRADE 온라인 자가판정 안내 <https://www.yestrade.go.kr/judgements/self/guide> 조회일 2026-11-14 변동: 잦음
- [K122] 외국환거래규정 제9장 제2절 국내기업 등 해외지사(제9-16조 적용범위, 제9-18조 설치신고, 제9-24조 폐쇄, 제9-25조 사후관리) <https://www.mofe.go.kr/lw/denm/detailTbDenmView.do?searchBbsId1=MOSFBBS_000000000120&searchNttId1=MOSF_000000000079810&menuNo=7090200> 조회일 2026-11-14 변동: 잦음

- [K123] 외국환거래법 제15조(지급절차 등) 제2항 <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=57324&lang=KOR> 조회일 2026-11-14 변동: 잦음
- [K124] 외국환거래법 시행령 제29조(지급 또는 수령의 허가) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=74027&lang=KOR> 조회일 2026-11-14 변동: 잦음
- [K125] 한국수출입은행 해외사업관련대출(해외투자자금 등) <https://www.koreaexim.go.kr/HPHKFG045M01> 조회일 2026-11-14 변동: 잦음
- [K126] 상법 제342조의2(자회사에 의한 모회사주식의 취득)·제412조의5(자회사의 조사권) <https://elaw.klri.re.kr/kor_service/lawView.do?hseq=54525&lang=KOR> 조회일 2026-11-14
- [K127] 외국환거래법 일부개정법률(법률 제21714호, 2026-06-02 공포, 2026-12-03 시행 예정 — 의안 주요내용: 자본거래 정의 정비(제3조 제1항 제19호, 해외지사 유지 경비 포함)와 가상자산 관련 신설) — 국민참여입법센터 의안 제2218829호 <https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2218829/detailRP> 조회일 2026-11-14 변동: 잦음
- [K128] 재정경제부 고시 게시판 — 「국제평화 및 안전유지 등의 의무이행을 위한 지급 및 영수허가지침」 현행 고시는 구축 때 원문 미확인, 세션에서 확인 필요 <https://www.mofe.go.kr/lw/denm/TbDenmList.do?bbsId=MOSFBBS_000000000120&menuNo=7090200> 조회일 2026-11-14 변동: 잦음

### 글로벌
- [G1] 15 U.S.C. §78dd-1(발행인의 금지된 해외 거래 관행) — U.S. Code 2024 ed. <https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap2B-sec78dd-1.htm> 조회일 2026-11-14
- [G2] 15 U.S.C. §78dd-2(국내 기업) <https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap2B-sec78dd-2.htm> 조회일 2026-11-14
- [G3] 15 U.S.C. §78dd-3(발행인·국내 기업 외의 자) <https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap2B-sec78dd-3.htm> 조회일 2026-11-14
- [G4] DOJ·SEC 「A Resource Guide to the U.S. Foreign Corrupt Practices Act」 Second Edition <https://www.justice.gov/criminal/criminal-fraud/fcpa-resource-guide> 조회일 2026-11-14
- [G5] UK Bribery Act 2010 s.1·s.6·s.7·s.9 <https://www.legislation.gov.uk/ukpga/2010/23/contents> 조회일 2026-11-14
- [G6] UK Ministry of Justice, Bribery Act 2010 guidance <https://www.gov.uk/government/publications/bribery-act-2010-guidance> 조회일 2026-11-14
- [G7] OECD Convention on Combating Bribery of Foreign Public Officials in International Business Transactions (OECD/LEGAL/0293) <https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0293> 조회일 2026-11-14
- [G8] OECD Guidelines for Multinational Enterprises on Responsible Business Conduct (2023) <https://doi.org/10.1787/81f92357-en> 조회일 2026-11-14
- [G9] OECD Transfer Pricing Guidelines for Multinational Enterprises and Tax Administrations 2022 <https://doi.org/10.1787/0e655865-en> 조회일 2026-11-14
- [G11] UNCITRAL, United Nations Convention on Contracts for the International Sale of Goods (Vienna, 1980) <https://uncitral.un.org/en/texts/salegoods/conventions/sale_of_goods/cisg> 조회일 2026-11-14
- [G12] UNCITRAL, CISG status <https://uncitral.un.org/en/texts/salegoods/conventions/sale_of_goods/cisg/status> 조회일 2026-11-14
- [G13] UNCITRAL, Convention on the Recognition and Enforcement of Foreign Arbitral Awards (New York, 1958) <https://uncitral.un.org/en/texts/arbitration/conventions/foreign_arbitral_awards> 조회일 2026-11-14
- [G14] UNCITRAL, New York Convention status <https://uncitral.un.org/en/texts/arbitration/conventions/foreign_arbitral_awards/status2> 조회일 2026-11-14
- [G15] UNIDROIT Principles of International Commercial Contracts 2016 <https://www.unidroit.org/instruments/commercial-contracts/unidroit-principles-2016/> 조회일 2026-11-14
- [G16] ICC Arbitration Rules 2021 <https://iccwbo.org/dispute-resolution/dispute-resolution-services/arbitration/rules-procedure/2021-arbitration-rules/> 조회일 2026-11-14
- [G18] Delaware Division of Corporations, How to Form a New Business Entity <https://corp.delaware.gov/howtoform/> 조회일 2026-11-14
- [G19] IRS, About Form 5472 <https://www.irs.gov/forms-pubs/about-form-5472> 조회일 2026-11-14
- [G20] CFIUS Overview <https://www.cfius.gov/about/overview/> 조회일 2026-11-14 변동: 잦음
- [G21] JETRO, Setting Up Business in Japan — Section 1 Incorporating Your Business <https://www.jetro.go.jp/en/invest/setting_up/section1/page1.html> 조회일 2026-11-14
- [G22] 일본 법무성 상업·법인 등기 신청서 양식·합동회사 설립 절차 <https://www.moj.go.jp/MINJI/minji06_00141.html> 조회일 2026-11-14
- [G23] Singapore ACRA, Registering a local company via Bizfile <https://www.acra.gov.sg/register/business/registering-different-business-structures/local-company/registering-via-bizfile/> 조회일 2026-11-14
- [G24] 베트남 투자법 Luật Đầu tư số 143/2025/QH15(2026-03-01 시행, 제51조 제4항으로 61/2020/QH14 실효) <https://vanban.chinhphu.vn/?pageid=27160&docid=216524&classid=1&typegroupid=3> 조회일 2026-11-14 변동: 잦음
- [G25] 베트남 재무부 정책 질의응답 — Nghị định 96/2026/NĐ-CP 투자등록·기업등록 순서 <https://portal.mof.gov.vn/hoidapcstc/home/cthoidap/167087> 조회일 2026-11-14 변동: 잦음
- [G26] 중화인민공화국 외상투자법(2019 채택, 2020-01-01 시행) <https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=66447> 조회일 2026-11-14 변동: 잦음
- [G27] 중국 외상투자 진입 특별관리조치(네거티브 리스트) 2024년판 <https://www.ndrc.gov.cn/xxgk/jd/jd/202409/t20240907_1392878.html> 조회일 2026-11-14 변동: 잦음
- [G28] Germany Trade & Invest, Investment Guide — Setting Up a GmbH <https://www.gtai.de/en/invest/investment-guide/setting-up-a-gmbh-630322> 조회일 2026-11-14
- [G29] EU 외국인투자 심사 — 현행 Regulation (EU) 2019/452, 이를 대체할 Regulation (EU) 2026/1386(2026-06-17 발효, 2028-01-17 적용 예정 — 그때까지 2019/452가 현행) <https://policy.trade.ec.europa.eu/enforcement-and-protection/investment-screening_en> 조회일 2026-11-14 변동: 잦음
- [G30] OFAC Specially Designated Nationals and Blocked Persons List <https://sanctionslist.ofac.treas.gov/Home/SdnList> 조회일 2026-11-14 변동: 잦음
- [G31] OFAC 50 Percent Rule FAQ <https://ofac.treasury.gov/faqs/topic/1521> 조회일 2026-11-14 변동: 잦음
- [G32] BIS Export Administration Regulations (15 CFR Parts 730–774) <https://www.bis.gov/regulations/ear> 조회일 2026-11-14 변동: 잦음
- [G33] European Commission, Sanctions (restrictive measures) <https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures_en> 조회일 2026-11-14 변동: 잦음
- [G34] EU Sanctions Map <https://www.sanctionsmap.eu/> 조회일 2026-11-14 변동: 잦음
- [G35] Wassenaar Arrangement <https://www.wassenaar.org/> 조회일 2026-11-14 변동: 잦음
- [G36] United Nations Security Council Consolidated List <https://main.un.org/securitycouncil/en/content/un-sc-consolidated-list> 조회일 2026-11-14 변동: 잦음
- [G37] UNCTAD World Investment Report 2026 <https://unctad.org/publication/world-investment-report-2026> 조회일 2026-11-14
- [G38] World Bank Group, Business Ready (B-READY) <https://www.worldbank.org/en/businessready> 조회일 2026-11-14
- [G39] ILO Declaration on Fundamental Principles and Rights at Work (1998, amended 2022) <https://www.ilo.org/resource/conference-paper/ilo-1998-declaration-fundamental-principles-and-rights-work-and-its-follow> 조회일 2026-11-14
- [G40] ILO Conventions, Protocols and Recommendations(기본 협약) <https://www.ilo.org/international-labour-standards/conventions-protocols-and-recommendations> 조회일 2026-11-14

- [G41] 日本貿易保険(NEXI) 海外投資保険 상품 안내 <https://www.nexi.go.jp/product/booklet/pdf/pr07_08_02.pdf> 조회일 2026-11-14
- [G42] JETRO 海外進出支援 <https://www.jetro.go.jp/services/fdi/> 조회일 2026-11-14
- [G43] UK Export Finance <https://www.gov.uk/government/organisations/uk-export-finance> 조회일 2026-11-14
- [G44] Export-Import Bank of the United States, About EXIM <https://www.exim.gov/about> 조회일 2026-11-14
- [G45] UN Comtrade Database <https://comtradeplus.un.org/> 조회일 2026-11-14
- [G46] UNCTAD Data Hub(UNCTADstat) <https://unctadstat.unctad.org/> 조회일 2026-11-14
- [G47] WTO Stats <https://stats.wto.org/> 조회일 2026-11-14
- [G48] 中华人民共和国公司法(2023 개정, 2024-07-01 시행) 第十二章 公司解散和清算(제229조~제242조) <http://www.npc.gov.cn/npc/c2/c30834/202312/t20231229_433999.html> 조회일 2026-11-14
- [G49] 베트남 투자법 143/2025/QH15 제36조(Chấm dứt hoạt động của dự án đầu tư) — 정부 관보 <https://congbao.chinhphu.vn/van-ban/luat-so-143-2025-qh15-468703.htm> 조회일 2026-11-14 변동: 잦음

### 학술
- [A1] Johanson & Vahlne(1977), The Internationalization Process of the Firm, JIBS 8(1) <https://doi.org/10.1057/palgrave.jibs.8490676> 조회일 2026-11-14
- [A2] Johanson & Vahlne(2009), The Uppsala internationalization process model revisited, JIBS 40(9) <https://doi.org/10.1057/jibs.2009.24> 조회일 2026-11-14
- [A3] Dunning(1988), The Eclectic Paradigm of International Production, JIBS 19(1) <https://doi.org/10.1057/palgrave.jibs.8490372> 조회일 2026-11-14
- [A4] Dunning(2000), The eclectic paradigm as an envelope for economic and business theories of MNE activity, IBR 9(2) <https://doi.org/10.1016/S0969-5931(99)00035-9> 조회일 2026-11-14
- [A5] Anderson & Gatignon(1986), Modes of Foreign Entry: A Transaction Cost Analysis and Propositions, JIBS 17(3) <https://doi.org/10.1057/palgrave.jibs.8490432> 조회일 2026-11-14
- [A6] Hofstede(2011), Dimensionalizing Cultures: The Hofstede Model in Context <https://doi.org/10.9707/2307-0919.1014> 조회일 2026-11-14
- [A7] House 외(2002), Understanding cultures and implicit leadership theories across the globe: an introduction to project GLOBE, JWB 37(1) <https://doi.org/10.1016/S1090-9516(01)00069-4> 조회일 2026-11-14
- [A8] Ghemawat(2001), Distance Still Matters, Harvard Business Review(DOI 없음) <https://hbr.org/2001/09/distance-still-matters-the-hard-reality-of-global-expansion> 조회일 2026-11-14
- [A9] Berry, Guillén & Zhou(2010), An institutional approach to cross-national distance, JIBS 41(9) <https://doi.org/10.1057/jibs.2010.28> 조회일 2026-11-14
- [A10] Devinney, Midgley & Venaik(2000), The Optimal Performance of the Global Firm: Formalizing and Extending the Integration-Responsiveness Framework, Organization Science 11(6) <https://doi.org/10.1287/orsc.11.6.674.12528> 조회일 2026-11-14
- [A11] Kostova & Zaheer(1999), Organizational Legitimacy under Conditions of Complexity: The Case of the Multinational Enterprise, AMR 24(1) <https://doi.org/10.5465/amr.1999.1580441> 조회일 2026-11-14
- [A12] Kogut & Singh(1988), The Effect of National Culture on the Choice of Entry Mode, JIBS 19(3) <https://doi.org/10.1057/palgrave.jibs.8490394> 조회일 2026-11-14
