import Posts from '../model.js'
import express from 'express';

const router = express.Router();



  router.get("/", async (req, res) => {

    try{
      const posts = await Posts.find()
      res.status(200).json(posts)
    }
    catch(err){
      console.error(err.message)
    }
    });

    router.post("/", async (req, res) => {

      try{
        const post = await Posts.create(req.body)
        res.status(201).json(post)
      }
      catch(err){
        console.error(err.message)
      }
      });


  router.get("/:id", async (req, res) => {

    try{
      const post = await Posts.findById(req.params.id)
      res.status(200).json(post)
    }
    catch(err){
      console.error(err.message)
    }
    });


  router.put("/:id", async (req, res) => {

    try{
      const post = await Posts.findByIdAndUpdate(req.params.id, req.body, {new:true})
      

      res.status(200).json(post)
    }
    catch(err){
      console.error(err.message)
    }
    });

    router.delete("/:id", async (req, res) => {

      try{
        const post = await Posts.findByIdAndDelete(req.params.id)
        res.status(200).json(post)
      }
      catch(err){
        console.error(err.message)
      }
      });

export default router