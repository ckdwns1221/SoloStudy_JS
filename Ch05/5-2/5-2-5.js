/* 콜백함수를 활용하는 함수 : filter() */
/* 
    filter() 메소드도 배열이 갖고 있는 함수
    filter() 메소드는 콜백 함수에서 리턴하는 값이 true인 것들만 못아서 새로운 배열을 만드는 함수.
*/

const numbers = [0,1,2,3,4,5]
const evenNumbers = numbers.filter(function(value) {
    return value % 2 === 0
})

console.log(`원래 배열 : ${numbers}`)
console.log(`짝수만 추출 : ${evenNumbers}`)

/* 
    function(value, index, array) 형태로 사용하는것이 기본이지만, value만 활용하므로 value만 매개변수로 기입.
*/