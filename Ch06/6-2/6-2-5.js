/* Math 객체 */
/* 
    수학과 관련된 기본적인 연산을 할 때는 Math객체를 사용한다. Math 객체 속성으로는 pi, e와 같은 수항 상수가 있다.
    메소드로는 Math.sin(), Math.cos(), Math.tan()와 같은 삼각함수도 있다.
*/

/* Math.random 메소드 */
/* 
    랜던함 숫자를 생성할 때는 Math.random()메소드를 사용한다.
    이는 0 이상 1 미만의 범위에서만 랜덤한 숫자를 생성한다.
*/

const num = Math.random()
const num1 = Math.random()
const num2= Math.random()
const num3 = Math.random()
const num4 = Math.random()
const num5 = Math.random()
const num6 = Math.random()

console.log('#랜덤한 숫자')
console.log('0 ~ 1사이의 랜덤한 숫자 : ', num)
console.log('')

console.log('#랜덤한 숫자 범위 확대')
console.log('0 ~ 10사이의 랜덤한 숫자 : ', num * 10)
console.log('0 ~ 50사이의 랜덤한 숫자 : ', num * 50)
console.log('')

console.log('#랜덤한 숫자 범위 이동')
console.log('-5 ~ 5사이의 랜덤한 숫자 : ', num * 10 - 5)
console.log('-25 ~ 25사이의 랜덤한 숫자 : ', num * 50 - 25)
console.log('')

console.log('#랜덤한 정수 숫자')
console.log('-5 ~ 5 사이의 랜덤한 숫자 : ', Math.floor(num * 10 -5))
console.log('-25 ~ 25 사이의 랜덤한 숫자 : ', Math.floor(num * 10 -25))
console.log('')

console.log('# 로또 번호')
console.log('첫 번째 숫자 : ', Math.floor(num * 46))
console.log('두 번째 숫자 : ', Math.floor(num1 * 46))
console.log('세 번째 숫자 : ', Math.floor(num2 * 46))
console.log('네 번째 숫자 : ', Math.floor(num3 * 46))
console.log('다섯 번째 숫자 : ', Math.floor(num4 * 46))
console.log('여섯 번째 숫자 : ', Math.floor(num5 * 46))
console.log('보너스 번호 : ', Math.floor(num6 * 46))
console.log('')