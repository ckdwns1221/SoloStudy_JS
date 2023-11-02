/* 즉시 호출 함수를 사용한 문제 해결 */
let pi = 3.14
console.log(`파이 값은 ${pi}입니다.`)

(function () {
    let pi = 3.141592
    console.log(`파이 값은 ${pi}입니다.`)        
})()