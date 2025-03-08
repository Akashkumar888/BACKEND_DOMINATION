
// 0 false undefined NaN null "" document.all  ->falsy nature disri value milegi ok

//Since both are truthy, the && operator returns the last operand, which is 13.
console.log(12 && 13); // Output: 13


// false is a falsy value.
// The && operator stops at the first falsy value and returns it immediately.
// So, it returns false.

console.log(false && 13); // Output: false

// 12 is truthy.
// Since || returns the first truthy value, it returns 12.
// js
console.log(12 || 13); // Output: 12

// false is falsy, so || moves to the next operand.
// 13 is truthy, so || returns 13.
// js

console.log(false || 13); // Output: 13

