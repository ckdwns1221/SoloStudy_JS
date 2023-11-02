/* 배열 확인하기 */
/*
    배열을 typeof 연산자로 확인이 불가능하고, Array.isArray()메소드를 활용해야 함.    
*/

function min(first, ...rests) {
    // 변수 선언
    let output
    let items

    // 매개변수의 자료형에 따라 조건 분기하기
    if(Array.isArray(first) ) {
        output = first[0]
        items = first
    } else if(typeof(first) === 'number') {
        output = first
        items = rests
    }

    // 이전 절에서 살표보았떤 최솟값 구하는 공식
    for(const item of items) {
        // 현재 output보다 더 작은 item이 있다면
        if (output > item) {
            // output의 값을 item으로 변경
            output = item;
        }
    }   return output
}


console.log(`min(배열): ${min([52,273,32,103,275,24,57])}`)
console.log(`min(숫자, ...): ${min([52,273,32,103,275,24])}`)