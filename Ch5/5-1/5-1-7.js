/* 나머지 매개변수 */
/*
    호출할 때 매개변수의 개수가 고정적이지 않은 함수를 가변 매개변수 함수라고 부름.
    JS에서 이러한 함수를 구현할 때는 나머지 매개변수라는 특이한 형태의 문법을 사용함

    function 함수 이름 (...나머지 매개변수) { }
    함수의 매개변수 앞에 마침표 3개(...)을 입력하면 매개변수들이 배열로 들어옴.
*/

function sample (...items) {
    console.log(items);
}

sample(1,2)
sample(1,2,3)
sample(1,2,3,4)
