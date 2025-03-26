
const fs=require('fs');

fs.readdir("lolo",{withFileTypes:true},function(err,data){
  if(err)console.log(err);
  else console.log(data);
})

// 1 means file 
// 2 means folder 
