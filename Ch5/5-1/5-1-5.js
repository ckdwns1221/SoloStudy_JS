/* 더하기 함수 */
/*
    일반적으로 숫자를 계산해서 출력할 때는 다음과 같은 형태의 함수를 사용함.

    function 함수(매개변수) {
        let output = 초깃값
        문장
        return output
    }
*/

function sumALL(a,b) {
    let output = 0
    for(let i = a; i <= b; i++) {
        output += i;
    }
    return output
}

console.log(`1부터 100까지의 합 : ${sumALL(1,100)}`)
console.log(`1부터 500까지의 합 : ${sumALL(1,500)}`)