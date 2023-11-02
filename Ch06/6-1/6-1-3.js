/* 동적으로 객체 속성 제거하기 */
/* 
    객체의 속성을 제거할 때는 delete 키워드를 사용하고 형태는 다음과 같다. 

    delete 객체.속성
*/

// 객체 선언
const student = {}
student.name = '고창준'
student.email = 'ckdwns2181@gmail.com'
student.phone = '010-1234-5678'

// 객체 속성 제거
delete student.phone

// 객체 출력
console.log(JSON.stringify(student,null,2))



