export type EventType = "_119" | "_112" | "WEAK";
export const EVENT_TYPE: {[key in EventType]: EventType} = {
    _119: "_119",
    _112: "_112",
    WEAK: "WEAK",
}

const BODY_FILED_NAME = {
    [EVENT_TYPE._119]: [
        "TRANSMISSION_NUMBER", // 송신번호(로그인), 발생번호(발생, 정보변경, 관제종료, 관제해제)
        "EVENT_NAME", // 종별명
        "SECONDARY_EVENT_NAME", // 종별세부명
        "LONGITUDE", // 발생위치(경도)
        "LATITUDE", // 발생위치(위도)
        "OCCURRENCE_LOCATION", // 발생위치
        "DESIGNATED_LAW_CODE", // 법정동코드시도
        "OCCURRENCE_DATE", // 로그인일시(로그인), 발생일시(발생, 정보변경, 관제종료, 관제해제)
        "SENDER_ID", // 전송자아이디
        "END", // END(세미콜론)
    ],
    [EVENT_TYPE._112]: [
        "CASE_NUMBER", // 사건번호
        "ACCIDENT_GRADE", // 사고등급
        "ACCIDENT_TYPE", // 사고유형
        "LONGITUDE", // 발생위치(경도)
        "LATITUDE", // 발생위치(위도)
        "OCCURRENCE_LOCATION", // 사고지점전체주소
        "DESIGNATED_LAW_CODE", // 지역코드
        "OCCURRENCE_DATE", // 사건발생일시
        "SENDER_ID", // 사용자 아이디
        "END", // END(세미콜론)
    ],
    [EVENT_TYPE.WEAK]: [
        "NUMBER", // 발생번호,
        "SERVICE_TYPE", // 서비스유형
        "LONGITUDE", // 사건지점위치(경도)
        "LATITUDE", // 사건지점위치(위도)
        "OCCURRENCE_LOCATION", // 사고지점전체주소
        "DESIGNATED_LAW_CODE", // 지역코드
        "Ref_ID", // SKT와 112 신고센터 주고 받는 ID,
        "NAME", // 이름,
        "PHONE", // 핸드폰번호
        "BIRTH", // 출생일
        "GENDER", // 성별,
        "ADDRESS", // 주소(주거지)
        "PROTECTOR_NAME", // 보호자이름
        "PROTECTOR_PHONE", // 보호자핸드폰
        "OCCURRENCE_DATE", // 발생일시
        "IMAGE", // 이미지
        "PERSONAL_INFORMATION", // 신상정보
        "NOTE", // 특이사항
        "SENDER_ID", // 사용자 아이디
        "END", // END(세미콜론)
    ],
}

export const bodyParser = (type: EventType, data: string[]) => {
    return BODY_FILED_NAME[type].reduce((acc, key, index) => {
        return {...acc, [key]: data[index]};
    }, {});
}
