/* JSON.parse() 메소드 */
/* 
    JSON 문자열을 자바스크립트 객체로 전개할 때는 JSON.parse()메소드를 사용합니다. 매개변수에 JSON 형식의 문자열을 넣어주면 됩니다.
*/

// 자료 생성
const data = [{
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}, {
    name : 'HTML5 웹 프로그래밍 입문',
    price : 26000,
    publisher : '한빛아카데미'
}]

// 자료를 JSON으로 변환합니다.
const json = JSON.stringify(data)
console.log(json)

// JSON 문자열을 다시 자바스크립트 객체로 변환
console.log(JSON.parse(json))