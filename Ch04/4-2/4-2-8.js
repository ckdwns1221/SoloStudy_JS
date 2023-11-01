let i = 0;
while (confirm('계속 진행하시겠습니까?')) {
    // 사용자가 확인 버튼을 클릭하면 ture가 되어 계속 반복.
    // alert는 vscode에서 실행 안됨 하려면 html로 파일 변경 후 웹 브라우저에서 확인하기
    alert(`${i}번째 반복입니다.`)
    i = i + 1
}