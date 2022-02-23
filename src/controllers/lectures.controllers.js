const express = require('express');
const protect = require('../middlewares/protect');
const router= express.Router();

const Lecture = require('../model/lecture.model');

router.get("/",protect, async (req,res)=>{
    try{
        const per_page = req.query.per_page || 2;
        const page = req.query.page || 1;
        const skip = page < 0 ? 0 : (page - 1)*per_page;

        const lectures = await Lecture.find().populate("author_id").skip(skip).limit(per_page);

        if(!lectures) return res.status(400).json({msg: "No lectures found"}) 
        return res.status(200).json(lectures);
          }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})

router.post("/", async (req,res)=>{
    try{
        const lecture = await Lecture.create(req.body)
        return res.status(200).json({data: lecture})
    }
    catch(err){
        return res.status(400).json({status:"failed",msg: "unable to create the lecture"})
    }
})

module.exports = router;