/* 블록이 다른 경우에 선언적 함수의 사용 */
/* 
    선언적 함수는 어떤 코드 블록(script 태그 또는 함수 등으로 구분되는 공간)을 읽어들일 때 먼저 생성된다.
    아래처럼 블록이 나뉘어진 경우에는 선언적 함수의 실행 흐름을 예측하는 것이 훨씬 어려워짐.
*/

{
선언적함수()

function 선언적함수() {
    console.log('1번째 선언적 함수입니다.')
}
}

{
function 선언적함수() {
    console.log('2번째 선언적 함수입니다.')
}
}
선언적함수()
