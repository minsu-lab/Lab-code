const str = 'hi';

str.name = 'minsu';

console.log(globalThis === this);
// console.log(globalThis === window);
// console.log(globalThis === frames);
console.log(globalThis === global);