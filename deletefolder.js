
const fs=require('fs');

fs.rm("lolo",{recursive:true},function(err){
  if(err)console.log(err);
  else console.log("Folder deleted Successfully...");
});


