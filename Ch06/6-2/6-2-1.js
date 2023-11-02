/* 프로토타입으로 숫자 메소드 추가하기 */
/* 
    아래 코드에서 this.valueOf()로 숫자 값을 꺼냈다. 그냥 this ** n을 해도 무방하지만, 
    객체 내부에서 값을 꺼내는 것임을 명확하게 하기 위해서 9행처럼 valueOf()메소드를 사용하는것이 일반적이다.
*/

// power() 메소드를 추가
Number.prototype.power = function(n=2) {
    return this.valueOf() ** n
}

// Number 객체의 power() 메소드를 사용합니다.
const a = 12
console.log('a.power():', a.power())
console.log('a.power(3):', a.power(3))
console.log('a.power(4):', a.power(4))