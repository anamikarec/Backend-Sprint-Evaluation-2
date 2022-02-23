const mongoose = require("mongoose");
const User = require("../model/user.model")
const lectureSchema = new mongoose.Schema(
  {
    title : {type : String,required: true},
    author_id : {
      type : mongoose.Schema.Types.ObjectId, 
      ref : "users",
      required: true
    },
    batch : {type : String,required: true}
   },
  );


const Lecture = mongoose.model("Lecture", lectureSchema);

module.exports = Lecture;
