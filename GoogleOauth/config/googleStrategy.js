
const passport=require('passport');

const GoogleStrategy=require('passport-google-oauth20');


passport.use(
  new GoogleStrategy(
    { 
  clientID: process.env.GOOGLE_CLIENT_ID,       
  clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
  callbackURL: process.env.GOOGLE_CALLBACK_URL 
   },
    function(accessToken,refreshToken,profile,done){
      console.log(profile);
      done(null,profile);
    }
  )
);



// passport ko chahiye do function hr bar 

passport.serializeUser((user, done) => {
  done(null, user.id); // Store whole user object
});

passport.deserializeUser((id, done) => {
  done(null,id); // Retrieve whole user object
});



