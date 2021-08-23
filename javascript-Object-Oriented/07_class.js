/* 
  class 객체를 만든다 ( 1. 객체를 만든다 , 2. 객체를 초기화한다)
*/


class Person {
    // 객체 생성전 자동 실행되는 함수
    constructor(name, first, second) {
        console.log('constructor');
        this.name = name;
        this.first = first;
        this.second = second;
    }
    // 메소드 정의 : 최종
    sum() {
        return 'in Class: '+ (this.first+this.second);
    }

    //  메소드 정의 : 가능 2
    sum2 = function() {
        return 'in Class: '+ (this.first+this.second);
    }

}

//  메소드 정의 : 가능 1
Person.prototype.sum1 = function() {
    return 'prototype: '+ (this.first+this.second);
}

var kim = new Person('kim', 10, 20);
// 메소드 재정의!!!!! 
kim.sum  = function() {
    return 'kim sum : '+ (this.first+this.second);
}
var lee = new Person('lee', 10, 10);
console.log(kim.sum());
console.log(lee.sum());

