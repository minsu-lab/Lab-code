/* 

Object.freeze
한번 얼리면 풀리지 않음!!
다시 사용하려면 복제해서 다시 만들어야됌

중첩까지는 고정시키지 못 함

const  vs freeze

const  : 대상이 되는 값을 바꿀려고 하는걸 못하게 함
const a = {name:'kim'};
const b = {name:'kim'};
a = b  : a의 값을 b로 바꿀려고 하는 걸 막은 const
Object.freeze(a);
a.name = 'lee'

freeze는 값 자체를 못 바꾸게 하고 (값을 규제)
const는 이름이 가리키는 값을 못 바꾸게 하는 것 (이름을 규제)
*/

var o1 = {name : 'kim', score: [1,2]}

Object.freeze(o1);
Object.freeze(o1.score);
o1.name= 'lee';
o1.city= 'seoul';
o1.score.push(3);
console.log(o1);
