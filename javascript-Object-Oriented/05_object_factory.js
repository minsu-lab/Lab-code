//step  1
var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    third: 30,
    sum : function(){
        return this.first+this.second+this.third;
    }
}

var lee = {
    name : 'lee',
    first : 10,
    second : 10,
    third : 10,
    sum : function(){
        return this.first+this.second+this.third;
    }
}

console.log(kim.sum());
console.log(lee.sum());

var d1 = new Date('2021-8-20');
console.log('d1', d1.getFullYear());
console.log('d1', d1.getMonth());

console.log('Date',Date);

/* 
    step 2 constructor (생성자) : 같은 속성의 객체생성 용의   재사용성
    {}로 생성하면 같은 값을 계속 넣어줘야되는 불편함이 있다.

 */
function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first+this.second+this.third;
    }
}

var kim1 = new Person('kim1', 10, 20, 30);
var lee1 = new Person('lee1', 10, 10, 10);
console.log(kim1.sum());
console.log(lee1.sum());

