// ||= assigns the right-side value only if the left is a falsy value

let a = false;

// if (!a) {
//     a = 10;
// }

// a = a || 10;

a ||= 10;    //short version of above if statement

console.log(a);


// &&= assigns the right-side value only if the left is a truthy value

let b = 10;

// if (b) {
//     b = 20;
// }

// b = b && 20;

b &&= 20;      //shortest possible version

console.log(b);


// ??= assigns the right-side value only if the left is null or undefined

let c = null;

// if (c === null || c === undefined) {
//     c = 20;
// }

// c = c ?? 20;

c ??= 20;    //shortest possible version

console.log(c);