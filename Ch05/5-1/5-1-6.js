/* 최솟값을 구하는 함수 */

function min(array) {
    let output = array[0];
    for(const item of array) {
        // 현재 output보다 더 작은 item이 있다면
        if (output > item) {
            // output의 값을 item으로 변경
            output = item;
        }
    }
    return output
}

const testArray = [52, 273, 32, 103, 275, 24, 57]
console.log(`${testArray} 중에서`)
console.log(`최솟값 = ${min(testArray)}`)

/* 최댓값을 구하는 함수 */

function max(array) {
    let output2 = array[0]
    for(const item2 of array) {
        // 현재 output2보다 큰 item2가 있다면
        if(output2 < item2) {
            output2 = item2
        }
    }
    return output2
}

console.log(`${testArray} 중에서`)
console.log(`최댓값 = ${max(testArray)}`)
