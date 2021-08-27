function fn(person) {
     person = Object.assign({}, person);
     person.name = 'lee';
     return person;
}

var o1 = {name :'kim'}
var o2 = fn(o1);
console.log(o1, o2);



function fn2(person) {
     person.name = 'lee';
}

var o3 = {name :'kim'}
var o4 = Object.assign({}, o3);
console.log(o3, o4);