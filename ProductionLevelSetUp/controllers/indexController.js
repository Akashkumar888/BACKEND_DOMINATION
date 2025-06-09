const randomUser=require('../utils/randomUsername');

module.exports.indexController=function(req,res){
  const name=randomUser();
  const dost='hello dost yh mai hu aur ye mera dost indexRoute.js...';
  // res.send(`${name} <br> ${dost}`);
  res.render('index',{name,dost});
};

