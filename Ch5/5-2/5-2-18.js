/* let 사용의 의미 */
/* 
    과거에는 var을 많이 사용하였지만, var 키워드는 이전 코드처럼 덮어쓰는 문제가 발생하여 let과 const 키워드가 탄생했다.
*/

// 익명 함수 생성
let 함수 = function() {
    console.log('익명 함수입니다.')
}

// 선언적 함수 생성 할당
function 함수() {
    console.log('선언적 함수입니다.')
}

// 함수 호출
함수()