var memberArray = ['banana','orange','tomato'];

var i = 0;
console.group('array loop');
while( i < memberArray.length) {
    console.log(memberArray[i]);
    i = i+1;
}
console.groupEnd('array loop');


var memberObject = {
    manager: 'red',
    developer: 'yellow',
    designer:'blue'
}


console.group('object loop');
for( var name in memberObject ){
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');