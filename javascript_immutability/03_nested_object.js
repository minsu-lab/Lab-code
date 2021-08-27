/* 

중첩된 객체

객체 안의 객체, 배열 
중첩으로 있을때
assign을 사용하면 배열의 특수한 기능 사라짐( 배열 기능을 못 씀)
     concat, slice, from
     push - 원본에 추가
     concat - 원본을 복제하고 추가, 인자가 없으면 복제만
*/

var o1 = {name: 'kim', score: [1,2]};
var o2 = Object.assign({}, o1);
o2.score = o2.score.concat(); // concat 복제된 배열을 리턴
o2.score.push(3);
console.log(o1,o2,o1===o2, o1.score === o2.score);