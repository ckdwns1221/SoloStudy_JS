/* 객체의 기본 */
/* 
    객체는 중괄호 { }로 생성하며, 다음과 같은 형태의 자료를 쉼표(,)로 연결해서 입력한다,
    키 : 값
*/
const product = {
    제품명 : '7D 건조 망고',
    유형 : '당절임',
    성분 : '망고, 설탕, 치자황색소, 메타중아황산나트륨',
    원산지 : '필리핀'
}

/* 객체 요소 접근 */

// 대괄호 표기법
product['제품명']
product['유형']
product['성분']
product['원산지']

// 점 표기법
product.제품명
product.유형
product.성분
product.원산지

console.log(product)

/* 속성과 메소드 */
/* 
    객체 내부에 있는 값은 속성이라고 한다. 객체의 속성은 모든 형태의 자료형을 가질 수 있다.
*/

const object = {
    number : 273,
    string : '구름',
    boolean : true,
    array : [52,273,103,32,57],

    // 객체의 속성중 함수 자료형인 속성을 메소드라고 칭함.
    method : function() { }
}

// 메소드 호출
object.method()


