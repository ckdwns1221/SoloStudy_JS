/* 매개변수와 리턴값 */
/*
    함수를 호출할 때 괄호 안에 적는 것을 매개 변수라고 함. prompt() 함수를 사용할 때 매개변수로 message를 넣어야 함.
    그러면, prompt() 함수의 최종 결과는 문자열로 나온다. 함수의 최종 결과를 리턴 값이라고 부름.

    function 함수(매개변수, 매개변수, 매개변수) {
        문장
        문장
        return 리턴값
    }
*/

// 함수 선언
function f(x) {
    return x * x;
}

// 함수 호출

console.log(f(3));