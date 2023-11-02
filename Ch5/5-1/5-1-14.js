/* arguments를 사용한 가변 매개변수 함수 */
/* 
    구 버전의 JS에서 가변 매개변수 함수를 구현할 때는 배열 내부에서 사용할 수 있는 특수한 변수인 arguments를 활용함
    arguments는 매개변수와 관련된 여러 정보를 확인할 수 있고, 배열과 비슷하게 사용할 수 있음.
*/

function sample() {
    console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        console.log(`${i}번째 요소 : ${arguments[i]}`)
    }
}

sample(1,2)
sample(1,2,3)
sample(1,2,3,4)