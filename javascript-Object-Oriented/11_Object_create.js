
/* 

__proto__  : 표준이 아님 => 표준화 방법  Object.create() 사용

*/

var superObj = { superVal: 'super' }

// var subObj = { subVal:'sub' }
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal); // subObj 에 없는 값 호출시 부모 검색

subObj.superVal = 'sub';
// subObj 를 바꾸는거지 subObj.__proto__ 의 값을 바꾼게 아니여서   그냥 'super'출력
console.log('superObj.superVal => ', superObj.superVal);
