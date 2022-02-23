const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll_number : {type : Number,required: true, unique: true },
    student_id : {
      type : mongoose.Schema.Types.ObjectId, 
      ref : User,
      required: true
    },
    batch : {type : String,required: true}
   },
  );


const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
