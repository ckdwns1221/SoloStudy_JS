/* JSON 객체 */
/* 
    인터넷에서 문자열로 데이터를 주고 받을 때는 CSV, XML, CSON등 다양한 자료 표현 방식이 있는데, 그중에서 JSON객체가 현재
    가장 많이 사용되는 자료표현 방식이다. JSON은 JavaScript Object Notation의 약자이다. JSON은 자바스크립트 배열과 객체를
    활용해 어떤 자료를 표현하는 형식이다. 하지만 약간의 추가 규칙이 있다.
        1. 값을 표현할 때는 문자열, 숫자, 불 자료형만 사용할 수 있다.(함수 등은 사용 불가능.)
        2. 문자열은 반드시 큰 따옴표로 만들어야 한다.
        3. 키(key)에도 반드시 따옴표를 붙여야 한다.
    
    대부분의 프로그래밍 언어는 JSON 형식의 문자열을 읽어들이는 기능이 있다. 그래서 네트워크를 통해서 각각의 프로그래밍 언어로 
    만든 애플리케이션들이 데이터를 교환할 때 사용한다. 자바스크립트 객체를 JSON 문자열로 변환할 때는 JSON.stringify()메소드를 사용한ㄷ,
    
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
console.log(JSON.stringify(data))
console.log(JSON.stringify(data,null,2))
