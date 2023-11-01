 /* for in 반복문*/
// 배열요소 하나하나 꺼내서 특정 문장을 실행할 때 사용.
/*
    for (const 반복변수 in 배열 또는 객체) {}
        문장
    }
*/
const todo = ['우유 구매', '업무 메일 확인하기', '필라테스 수업']

for (const i in todos ) {
    console.log(`${i}번째 할 일 : ${todos[i]}`)
}