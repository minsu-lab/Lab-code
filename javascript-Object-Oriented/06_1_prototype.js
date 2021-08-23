/* 
객체 생성시 만다 sum 이라는 함수가 계속 생성된다! 
만개생성시 ... 메모리 낭비 -> 성는저하
생성자 안에서 메소드 만든 단점!!!!
생성자가 공통적으로 사용하는 속성, 메소드를 만드는 법 : prototype
*/
function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
}

// prototype 으로 한번만 정의 됨 , 일억개를  같이 사용  , 성능 메모리 절약
Person.prototype.sum = function() {
    return 'prototype: '+ (this.first+this.second);
}

var kim = new Person('kim', 10, 20, 30);
// 임의 객체에서 재정의 할 수 있다. 
kim.sum = function() {
    return 'this: '+ (this.first+this.second);
}
var lee = new Person('lee', 10, 10, 10);

console.log(kim.sum());
console.log(lee.sum());

