const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title : {type : String,required: true, unique: true },
    body: { type: String, required: true},
    // name : {
    //   type : mongoose.Schema.Types.ObjectId, 
    //   ref : User,
    //   required: true
    // }
   },
  { timestamps: { created_at: () => Date.now() } }
);


const Post = mongoose.model("Post", postSchema);

module.exports = Post;
