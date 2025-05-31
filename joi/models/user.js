
const Joi=require('joi');
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/joitestdb')
.then(function(){
console.log("database successfully connected...");
})
.catch(function(err){
  console.log("database connection failed...",err);
});



const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120
  },
  contact: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    maxlength: 20
  },
  email: {
  type: String,
  required: true,
  trim: true,
  lowercase: true,
  match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  }
});


function validateModel(data) {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
            
        name: Joi.string()
            .min(2)
            .max(50)
            .required(),
            
        age: Joi.number()
            .integer()
            .min(18)
            .max(120)
            .required(),
            
        contact: Joi.number()
            .integer()
            .required(),
            
       email: Joi.string()
          .email()
          .custom((value, helpers) => {
            const regex = /^[^\s@]+@[^\s@]+\.(com|net)$/;
            if (!regex.test(value)) {
              return helpers.message('Email must be valid and end with .com or .net');
            }
            return value;
          })
          .required()
            })
       .messages({
              'string.email':'make sure your email is correct'
              // 'any.only':',only .com and .net domains are allowed...'
            })

    const {error}=schema.validate(data);
    return error;
  }

const userModel=mongoose.model('User',userSchema);

module.exports = {userModel,validateModel};  // ✅ Exporting an object
// Yes, export and import sequence matters in JavaScript when using module.exports and require().



