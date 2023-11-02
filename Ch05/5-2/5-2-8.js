/* 타이머 종료 함수 */
/* 
    설정한 타이머를 종료하고 싶을 때 사용하는 함수

    clearTimeout(타이머_ID)         // setTimeout() 함수로 설정한 타이머를 제거.
    clearInterval(타이머_ID)        // setInterval() 함수로 설정한 타이머를 제거.
*/

let id
let count = 1
let timer = 4
id = setInterval(() => {
    console.log(`1초마다 실행됩니다(${count}번쨰). ${timer--}초후 종료됩니다.`)
    count++;
}, 1 * 1000)

setTimeout(() => {
    console.log('타이머를 종료합니다.')
    clearInterval(id)
}, 5 * 1000)