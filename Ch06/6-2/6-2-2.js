/* 프로토타입으로 문자열 메소드 추가하기 */
/* 
    자바스크립트에서 문자열 내부에 어떤 문자열이 있는지, 배열 내부에 어떤 자료가 있는지 확인할 때는 indexOf()메소드를 사용한다.
    문자열이 있는지 확인하고 있다면 문자열이 시작하는 위치(index)를 출력하고, 없으면 -1을 출력한다.
    따라서, "문자열.indexOf(문자열) >= 0"등의 코드를 사용하면 문자열 내부에 어떤 문자열이 포함되어 있는지 true 또는 false로 얻을 수 있다.
    이를 그냥 "문자열.contain(문자열)"했을 때 true 또는 false를 리턴하는 형태로 변경하면 나름 편리하게 사용이 가능하다.
*/

// contain() 메소드 추가
String.prototype.contain = function(data) {
    return this.indexOf(data) >= 0
}

Array.prototype.contain = function(data) {
    return this.indexOf(data) >= 0
}

// String 객체의 contain() 메소드를 사용
const a = '안녕하세요'
console.log('안녕 in 안녕하세요:', a.contain('안녕'))
console.log('없는데 in 안녕하세요 :', a.contain('없는데'))

// Array 객체의 contain() 메소드를 사용합니다.
const b = [273, 32, 103, 57, 52]
console.log('273 in [273, 32, 103, 57, 52]:', b.contain(273))
console.log('0 in [273, 32, 103, 57, 52]:', b.contain(0))