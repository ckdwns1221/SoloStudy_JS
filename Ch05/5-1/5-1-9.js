/* 나머지 매개변수와 일반 매개변수 조합 */
/*
    function 함수이름(매개변수, 매개변수, ... 나머지 매개변수) {

    }
*/

function sample(a,b, ...c) {
    console.log(a,b,c)
}

sample(1,2)
sample(1,2,3)
sample(1,2,3,4)