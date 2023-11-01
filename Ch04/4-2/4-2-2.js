/* for of 반복문*/
// for in 반복문에 비해 요소의 값을 반복할 때 비교적 안정적으로 사용 가능함.
/*
    for (const 반복 변수 of 배열 또는 객체) {
        문장
    }
*/

const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업']

for (const todo of todos) {
    console.log(`오늘의 할일 : ${todos}`)
}
