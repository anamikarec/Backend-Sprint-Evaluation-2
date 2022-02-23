const express = require('express');
const protect = require('../middlewares/protect');
// const protect2 = require('../middlewares/protect2');
const router= express.Router();
const User = require('../model/user.model');
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

router.get("/:author_id",async (req,res)=>{
    try{
        
        const lectures = await Lecture.findOne({_id: req.params.author_id});

        if(!lectures) return res.status(400).json({msg: "No lecture found with this id"}) 
        return res.status(200).json(lectures);
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})
router.post("/", async (req,res)=>{
    try{
        // const user = await User.findOne()
        const lecture = await Lecture.create(req.body)
        return res.status(200).json({data: lecture})
    }
    catch(err){
        return res.status(400).json({status:"failed",msg: "unable to create the lecture"})
    }
})



router.delete('/:author_id',async (req,res)=>{
    try{
        const check = await Lecture.find()
        const lecture = await Lecture.findOneAndDelete({ _id: req.params.author_id })
        if(!lecture) return res.status(404).json({msg: "lecture not found"})
        res.status(200).json(lecture);
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})



router.patch('/:author_id',async (req,res)=>{
    try{
        if(!req.body.title) return res.status(400).json({msg: "Title is required"});

        const lecture = await Lecture.findOneAndUpdate({ 
                _id: req.params.author_id 
            },{
                $set: {
                    title: req.body.title,
                    batch: req.body.batch
                }
            },{
                returnOriginal: false
            }
        )
            if(!lecture) return res.status(404).json({msg: "lecture not found"})
            res.status(200).json(lecture)
        }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
})

module.exports = router;