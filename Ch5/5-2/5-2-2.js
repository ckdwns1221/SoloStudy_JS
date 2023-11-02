/* 콜백 함수 (2) : 익명 함수 사용 */

// 함수 선언
function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++) {
        callback(i)
    }
}

// 함수 호출
callThreeTimes(function (i) {
    console.log(`${i}번째 함수 호출`)
})