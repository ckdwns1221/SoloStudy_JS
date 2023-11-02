/* this 키워드의 차이 */
/* 
    function () {}형태로 선언하는 익명함수와 () => {} 형태로 선언하는 화살표 함수는
    객체의 메소들 사용될 때 this 키워드를 다루는 방식이 다르다.
    메소드를 만들 때 특별한 이유가 있지 않는 한 화살표 함수를 사용하지 않는다.
*/

// 변수 선언
const test = {
    a : function() {
        console.log(this)
    },
    b : () => {
        console.log(this)
    }
}

// 메소드를 호출함.
test.a()
test.b()