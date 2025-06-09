
const crypto=require('crypto');

module.exports=function(){
  const bytes=crypto.randomBytes(16);
  return bytes.toString('hex');
}
