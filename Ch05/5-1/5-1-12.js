/* 기본 매개변수 */
/* 
    함수의 매개변수에 항상 비슷한 값을 입력하는 경우가 있다. 이 행위가 귀찮게 느껴질텐데
    이러한 경우에 매개변수에 기본값을 지정하는 기본 매개변수를 사용

    함수 이름(매개변수, 매개변수=기본값, 매개변수 =기본값)
    function sample(a=기본값, b) ){ }
 */

function earnings(name, wage=9760, hours=40) {
    console.log(`name${name}님의 급여 정보`)
    console.log(`- 시급 : ${wage}원`)
    console.log(`- 근무 시간 : ${hours}시간`)
    console.log(`- 급여 : ${wage * hours}원`)
    console.log(' ')
}

earnings('구름')

// 시급 1만원으로 최대한 일하는 경우
earnings('별', 10000)

// 시급 1만원으로 52시간 일하는 경우
earnings('창준', 9760, 54)