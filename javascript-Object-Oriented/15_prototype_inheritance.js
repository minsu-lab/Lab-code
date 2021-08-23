/* 
   상속 (inheritance) 
   prototype 상속

*/


function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    
}

Person.prototype.sum = function() {
    return this.first+this.second;
}


function PersonPlus(name, first, second, third) {
    // 클래스의 super 기능
    Person.call( this, name, first, second);// 자신 컨스트럭터 this 전달 
    this.third = third;
}

// PersonPlus.prototype.__proto__ = Person.prototype;   비표준
PersonPlus.prototype = Object.create(Person.prototype); // Person 의 새로운 객체 생성 되서 constrctor가 Person으로 바뀜
PersonPlus.prototype.constructor = PersonPlus;//  PersonPlus 의 constrctor로 변경

PersonPlus.prototype.avg = function() {
    return (this.first+this.second+this.third)/3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()" , kim.sum());
console.log("kim.avg()" , kim.avg());
console.log("kim.constructor" , kim.constructor);




