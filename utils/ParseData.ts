import {headerParser} from "./ParseHeader";
import {bodyParser, EventType} from "./ParseBody";

// header의 길이는 48자로 고정
const HEADER_LENGTH = 48;

export default class ParseData {
    parseData = (type: EventType, data: string) => {
        let header: string[] = data.slice(0, HEADER_LENGTH).split('');
        // 구분자 = \x1E => 데이터, \x1F => 배열
        let body = data.slice(HEADER_LENGTH, data.length).split('\x1E').join('\x1F').split('\x1F');

        return {
            header: headerParser(header),
            body: bodyParser(type, body)
        };
    }
}
