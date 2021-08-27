/* 
     객체 불변 
     값을 복사해서 새로운 객체를 생성
     assign
*/

var o1 = {name: 'kim'};
var o2 = Object.assign({}, o1);
o2.name = 'lee';
console.log(o1, o2, o1===o2);