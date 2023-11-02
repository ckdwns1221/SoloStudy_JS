/* 함수 예제 */

function isLeapYear(year) {     // 일반적으로 자바스크립트에서 true 또는 false를 리턴하는 함수는 isㅁㅁ이라는 이름으로 만드는 편임.
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`)
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`)
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`)
console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`)