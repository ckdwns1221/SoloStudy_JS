/* 전개 부분 뒤로 이동하기 */

const 구름 = {
    이름 : '구름',
    나이 : 6,
    종족 : '강아지'
}
const 별 = {
    이름 : '별',
    나이 : 1,
    예방접종 : true,
    ...구름
}

console.log(JSON.stringify(구름))
console.log(JSON.stringify(별))