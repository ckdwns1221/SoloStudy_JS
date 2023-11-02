/* 선언적 함수 */
/*
    다음과 같이 이름이 있는 함수를 일반적으로 많이 사용함. 
    function 함수() {

    }
    조금의 차이는 있지만 위의 선언적 함수는 아래와 같은 기능을 수행함.
    let 함수 = function () {};
*/


function 함수 () {
    console.log('함수 내부의 코드입니다 ... 1')
    console.log('함수 내부의 코드입니다 ... 2')
    console.log('함수 내부의 코드입니다 ... 3')
    console.log(' ')
}

// 함수 호출
함수 ()                   // 내가 만든 함수도 기존의 alert(), prompt() 함수처럼 호출할 수 있음.
함수 ()

// 출력
console.log(typeof 함수)  // 함수의 자료형 확인
console.log(함수)         // 함수 자체도 단순한 자료이기 때문에 출력이 가능함  