
/* 

다른 객체를  서로 상속 관계로 만들기 
__proto__  : 표준이 아님

*/

var superObj = {
    superVal: 'super'
}

var subObj = {
    subVal:'sub'
}

subObj.__proto__ = superObj;//  superObject 자식으로 만들기

console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal); // subObj 에 없는 값 호출시 부모 검색


subObj.superVal = 'sub';
// subObj 를 바꾸는거지 subObj.__proto__ 의 값을 바꾼게 아니여서   그냥 'super'출력
console.log('superObj.superVal => ', superObj.superVal);
