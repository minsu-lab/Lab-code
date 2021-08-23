/* 
   상속 (inheritance) 
   
   왜 필요한가?
   Person 클래스에  평균 avg() 기능을 넣고 싶다.   넣어도 되지만

   Person  클래스가 다른 사람이 만들거나,  가져다 쓰는 API라면..
   Person 을 최소한으로 유지하면 다른 기능이 필요할때 거의 사용하지 않는
   avg() 기능이 이 필요할때 
   직접  Person 에  추가하는건 부담스럽다 이런경우에 상속을 사용

   방법
   1. Person 코드에 추가 수정
   2. 그냥 클래스를 하나더 만들기 PersonPlus  클래스 : 중복이 발생- 중복제거!
   그래서 상속( 중복 제거); extends 


   상속: 
   중복되는 코드 제거 -> 코드량 줄임
   코드 수정시 유지보수의 편의성 도모할 수 있게됐다.
   extends로 자식 코드 생성

*/


class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return 'in Class: '+ (this.first+this.second);
    }
}


class PersonPlus extends Person {
    /*  
    중복 제거 Person extends 로 상속!
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return 'in Class: '+ (this.first+this.second);
    } 
    */
    avg() {
        return (this.first+this.second)/2;
    }
}


var kim = new PersonPlus('kim', 10, 20);
// 메소드 재정의!!!!! 
kim.sum  = function() {
    return 'kim sum : '+ (this.first+this.second);
}

console.log(kim.sum());
console.log(kim.avg());


