
/* 

bind 
sum이라는 함수가 호출될때마다 ( sum.call(kim);) this를 바꾸는게 아니라
함수의 내부적으로 사용할 this를  고정해 새로운 함수를 만들어줌!

*/

var kim = {name: 'kim', first: 10, second: 20};
var lee = {name: 'lee', first: 10, second: 10};
function sum(prefix) {
    return prefix + (this.first + this.second);
}

console.log("sum.call(kim)", sum.call(kim, '=> '));
console.log("sum.call(lee)", sum.call(lee, ': '));

var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());