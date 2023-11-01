// 중첩 반복문을 사용하는 피라미드 만들어보기

// 변수 선언
let output = '';

// 중첩 반복문
for(let i=1; i<10; i++) {
    for(let j=0; j<i; j++) {
        output += '*';
    }
    output += '\n'
}
for(let i=1; i< 10; i++) {
    for(let j=10; j>i; j--) {
        output += '*';
    }
    output += '\n'
}
console.log(output);