
// for forin forof forEach while do-while 

// for(let i=0;i<12;i++)console.log(i);



var arr=[1,2,3,4];
// forEach loop array pr lagta hai
arr.forEach(function(value,index){
 console.log(value+3,index);
});


var obj={
  name:"akash",
  age:22,
  ditrict:"Jaunpur"
}
// forin object pr lagta hai 

for (var i in obj){
  console.log(i,obj[i]);
}



