

module.exports=function(req,res,next){
// req.randomNumber=Math.random();

  // isme do hi cheez rhta hai next() , res.redirect('');
console.log('Middleware chal raha hai...');
next(); // yh dena jaruri hai nhi to control yhi pr rahega
// ya phir res.redirect('/') ;

}


