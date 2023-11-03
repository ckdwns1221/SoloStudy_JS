/* 6-3 객체와 배열 고급 */
/* 속성 존재 여부 확인하기 */

const object = {
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : '한빛미디어'
}

// 객체 내부에 속성이 있는지 확인
if (object.name !== undefined) {
    console.log('name속성이 있습니다.')
}else{
    console.log('name속성이 없습니다.')
}

if (object.author !== undefined) {
    console.log('author속성이 있습니다.')
}else{
    console.log('author속성이 없습니다.')
}

// 더 짧게 확인하기

object.name || console.log('name속성이 없습니다.') // 있으면 출력 x 
object.author || console.log('author속성이 없습니다.')