/* while 반복문*/
// while 반복문은 불 표현식이 true면 계속해서 문장을 실행함
/*
    while (불 표현식) {
        문장
    }
*/
let i = 0;

while(true) {
    console.log(`${i}번째 반복입니다.`);
    i = i + 1;
    // 탈출 문장이 없어서 무한 반복
    // 코드를 작성할 때는 반드시 무한반복을 벗어나게 구현하기.
}