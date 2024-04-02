import ParseData from "./utils/ParseData";
import {EVENT_TYPE, EventType} from "./utils/ParseBody";

interface IData {
  type: EventType;
  data: string;
}

// 119 긴급출동지원
const test_iop_001: IData = {
  type: EVENT_TYPE._119,
  data: "999920180913164922119UCP201809131649220000000065user11920180913164922232411351080020180913164922user119;"
};
const test_iop_002 = {
  type: EVENT_TYPE._119,
  data: "101020180913165134119UCP201809131651340000000188T20180913165134화재교통사고127.099238937.4140687경기도 성남시 수정구 대왕판교로 815 판교창조경제밸리 기업지원허브411311150020180913165134user119;"
};
const test_iop_003 = {
  type: EVENT_TYPE._119,
  data: "104020180913170452119UCP201809131704520000000173T20180913165134구조교통사고_수정127.099812137.4153335경기도 성남시 수정구 대왕판교로 825 한국국제협력단411311150020180913170452user119;"
};
const test_iop_004 = {
  type: EVENT_TYPE._119,
  data: "105020180913175527119UCP201809131755270000000195T20180913165137구급교통 사고127.102152837.4062682경기도 성남시 분당구 대왕판교로712번길 22 판교테크노밸리 글로벌 R&D센터411351090020180913175527user119;"
};


// 사회적 약자
const test_iop_007 = {
  type: EVENT_TYPE.WEAK,
  data: "101020180917110728WP1UCP201809171107280000000370WP20180917110728기어S2127.101245337.4089425경기도 성남시 분당구 대왕판교로 7644113510900-홍길동010-1111-111120081022남경기도 성남시 수정구 달래내로 28번길 20-3홍을동010-2222-222220180917110728http://dev.copynpaste.co.kr:8090/scp/T001.jpg흰색 상의를 입고 있음눈이 크고 서양계의 이목구비SKT001;"
};


// 112 긴급영상지원
const test_iop_013 = {
  type: EVENT_TYPE._112,
  data: "101020180917151944112ucp201809171519440000000124YU3024003890CODE1강력범죄127.099238937.4140687경기도 성남시 대왕판교로 815111120180917151944user112;"
}

const test: IData = test_iop_013;
const parseData = new ParseData().parseData(test.type, test.data);
console.log(parseData);
