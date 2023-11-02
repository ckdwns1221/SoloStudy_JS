/* 콜백 함수 */
/* 
    JS는 함수도 하나의 자료형이므로 매개변수로 전달할 수 있다.
    이렇게 매개변수로 전달하는 함수를 콜백(callback) 함수라고 한다.
*/

// 함수 선언
function callThreeTimes (callback) {
    for (let i=0; i<3;  i++) {
        callback(i)     // callback이라는 매개변수는 함수이므로 호출 가능함.
    }
}

function print (i) {
    console.log(`${i}번째 함수 호출`)
}

// 함수 호출
callThreeTimes(print)