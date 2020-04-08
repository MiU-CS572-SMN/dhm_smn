//post visibility
//content
//unhealthy status .... hasUnhealthy: set in the fliter
//comments likes unlike uncomment

const Joi = require('joi');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  
    postTime:{
    type: Date,
   // required: true,  
  } ,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    //required: true
  },
  content:{
    type : String,
    required: true,
    minlength: 1,
    maxlength: 250, // users are allowed only 250 word of length
    trim: true
  },
  hasUnhealthy: {
        type: Boolean,
        default: false 
    },
  notifyFollowers:{
      type:Boolean,
      default:false
  }, 
  comments: [{
    type: String,
    maxlength: 50, // max comment length is 50
    commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }   
  }], 
  likedBy: [{     
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'       
  }],
  unlikedBy: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'    
  }],   
  photo:{
      type:String,
      required:false
  },
  isVisible:{
      type:Boolean,
      default:true
  }
});

const Post = mongoose.model('Post', postSchema);
//TODO: fields validation
/*
function validatePost(post) {
  const schema = {
    postTime: Joi.date(),
    title: Joi.string().min(2).max(50).trim().required(),
    targetCity: Joi.string().trim().required(),
    imagesURL: Joi.string().min(5).max(255)
  };
  return Joi.validate(advertisement, schema);
} */

exports.Post = Post; 
//exports.advertvalidate = validateAdvertisement;