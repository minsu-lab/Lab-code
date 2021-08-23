
/* 

call(a, b...);
a: 함수에서 this를 뭘로 할지
b..: b 인자부터  파라미터 인자값들 

유사품 apply();

객체의 this값을 바꿔줌 context를  바꿔줌

*/

var kim = {name: 'kim', first: 10, second: 20};
var lee = {name: 'lee', first: 10, second: 10};
function sum(prefix) {
    return prefix + (this.first + this.second);
}
/* 
c

sum이라는 객체를 실행!  sum(); 한것과 같음 
함수도 객체이다!!! 고로 모든 함수는  call() 이라는 메소드가 있다!!!
함수의 메소드 .call() 호출

sum 이라는 function은 kim이라는 객체의 멤버가 아니녔는데 
call 인자를 kim으로 지정하니 sum이라는 함수가 kim의 멤버가 됨

 */

console.log("sum.call(kim)", sum.call(kim, '=> '));
console.log("sum.call(lee)", sum.call(lee, ': '));
