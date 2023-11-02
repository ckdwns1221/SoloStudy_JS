/* 즉시 호출 함수 */
/* 
    (function ( ) { }) ()
*/

/* 이름 충돌 문제 발생 */
/* 
    let pi = 3.14
    console.log(`파이 값은 ${pi}입니다.`)

    let pi = 3.141592
    console.log(`파이 값은 ${pi}입니다.`)

    // SyntaxError: Identifier 'pi' has already been declared
*/

// var은 값의 재할당이 가능하고, 재선언 또한 가능하다.
    var pi = 3.14
    var pi = 3.141592

// let은 값의 재할당은 가능하지만, 재선언은 불가능하다.
    let pi = 3.14
        pi = 3.141592

/* 
const는 값의 재할당도 재선언도 불가능하다.
=> const는 말그대로 상수(변하지 않는 수)이기 때문. 
*/

