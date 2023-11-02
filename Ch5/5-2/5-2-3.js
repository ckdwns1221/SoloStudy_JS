/* 콜백함수를 활용하는 함수 : forEach() */
/* 
    콜백함수를 활용하는 가장 기본적인 함수는 forEach() 메소드다. 
    forEach() 메소드는 배열이 갖고 있는 함수(메소드)로써 단순하게 배열 내부의 요소를 사용해서 콜백 함수를 호출해줌.

    function (value, index, array) {

    }
*/

const number = [273, 52, 103, 32, 57]

number.forEach(function (value, index, array) {
    console.log(`${index}번째 요소 : ${value}`)
})