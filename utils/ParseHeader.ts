const HEADER_FIELD_NAME = [
    "CLASSIFICATION_CODE", // 전문구분코드
    "PROGRESS_CODE", // 진행구분코드
    "LOGIN_DATE", // 로그인일시(로그인), 진행구분일시(발생, 정보변경, 관제종료, 관제해제)
    "TRANSMISSION_CODE", // 송신시스템코드
    "RECEIVE_CODE", // 수신시스템코드
    "SENDING_DATE", // 발송일시
    "DATA_LENGTH", // data 길이
];

// 헤더의 각 필드 길이
const HEADER_FIELD_LENGTH = {
    [HEADER_FIELD_NAME[0]]: 2,
    [HEADER_FIELD_NAME[1]]: 2,
    [HEADER_FIELD_NAME[2]]: 14,
    [HEADER_FIELD_NAME[3]]: 3,
    [HEADER_FIELD_NAME[4]]: 3,
    [HEADER_FIELD_NAME[5]]: 14,
    [HEADER_FIELD_NAME[6]]: 10,
}

export const headerParser = (data: string[]) => {
    return HEADER_FIELD_NAME.reduce((acc, key, index) => {
        return {...acc, [key]: data.splice(0, HEADER_FIELD_LENGTH[HEADER_FIELD_NAME[index]]).join('')};
    }, {});
}
