/* 콜백 함수를 활용하는 함수 : map() */
/* 
    map()메소드도 배열이 갖고 있는 함수.
    map() 메소드는 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 만다는 함수.
*/

// 배열 선언
let numbers = [273,52,103,32,57]

// 배열의 모든 값을 제곱함.
numbers = numbers.map(function(value, index, array){
    return value * value
})

// 출력
numbers.forEach(console.log)


/* 5-2-4-1.js */
// 배열의 모든 값을 제곱함.
numbers = numbers.map(function(value){
    return value * value
})

// 출력
numbers.forEach(console.log)