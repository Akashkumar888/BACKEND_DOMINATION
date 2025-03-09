

// premitive and reference

// {} () [] reference 
// otherwise premitive 


// Language	Primitive	Reference ({}, [], ())
// C	int, char, float	arrays, pointers, structs
// C++	int, float, bool	vectors, classes, functions
// Java	int, boolean, double	arrays, objects, methods
// Python	int, float, bool	lists, dicts, sets, tuples
// JS	Number, Boolean, String	objects, arrays, functions

var b=[1,2,3];

var d=[...b];

var e=[4,5,6];
var f=e;
b.pop();
e.pop();
console.log(b);
console.log(d);
console.log(e);
console.log(f);

var arr={name:'a',type:"plastic"};

var brr=arr;
brr.name='d';

console.log(arr);
console.log(brr);

var crr={name:'h',type:"plastic"};

var drr={...crr};
drr.name='r';

console.log(crr);
console.log(drr);

