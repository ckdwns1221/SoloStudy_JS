/* 전개연산자가 없던 구 버전에서 apply()함수 사용 */
/* 
    전개연산자는 최신 버전의 JS에서 추가된 기능이다. 
    구 버전의 JS에서는 다음과 같이 apply()함수를 사용한 굉장히 특이한 패턴의 코드를 사용했다. 
*/

// 단순하게 매개변수를 모두 출력하는 함수 
function sample(...itmes) {
    console.log(itmes)
}

// 전개 연산자 사용 여부 비교하기
const array = [1,2,3,4]
console.log(sample.apply(null, array))
