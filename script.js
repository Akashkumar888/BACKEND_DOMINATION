
const fs=require('fs');


fs.readFile('priya.txt','utf8',function(err,data){
if(err)console.log(err);
else console.log(data);
});



fs.appendFile('priya.txt',' thank you so much i love you to akash 74438\n',function(err){
  if(err)console.log(err);
  else console.log("Data appended successfully...");
})



fs.rename("priya.txt","priyaMylove.txt",function(err){
  if(err)console.log(err);
  else console.log("Rename Successfully...");
})
