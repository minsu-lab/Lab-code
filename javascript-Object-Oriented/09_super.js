/* 
   상속 (inheritance) 
   자식과 부모의 관계 
    super
   
    1. Person 그냥 유지하면서 kim 생성시 third값 추가 시
   
    부모클래스 작동시키고 
    부모가 하지못하는 일을 나만 할 수 있는 기능 추가시 
    그때 Super 사용으로 부모 클래스의 중복코드 사용 제거

    super(): 부모클래스의 생성자
    super. : 부모 클래스 자체
    괄호() 있고 없고 차이!!!!!!!!!
    
    클래스로 객체 생성(인스턴트);
   
*/


class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return this.first+this.second;
    }
}


class PersonPlus extends Person {
    constructor(name, first, second, third) {
       super(name, first, second);
       this.third = third
    }
    sum() {
        return super.sum() + this.third;
    }
    avg() {
        return (this.first+this.second+this.third)/3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim.sum());
console.log(kim.avg());


