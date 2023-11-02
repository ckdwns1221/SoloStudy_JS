/* 동적으로 객체 속성 추가/제거 */
/* 
    객체를 처음 생성한 후에 속성을 추가하거나 제거하는 것을 '동적으로 속성을 추가한다' 또는 '동적으로 속성을 제거한다'고 표현함.
*/

// 객체 선언
const student = {}
student.name = '고창준'
student.email = 'ckdwns2181@gmail.com'
student.phone = '010-1234-5678'

// JSON.stringify()메소드는 객체를 콘솔 출력에서 쉽게 볼수 있는 방법. 자세한건 6-2에서 다루겠음.
console.log(JSON.stringify(student,null,2))