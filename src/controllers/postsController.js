import initModels from "../models/init_models";
import posts from "../models/posts";
import sequelize from "../db/connection/connection";

export async function getAll(req,res,next){
    try {
        initModels(sequelize);
        const list_posts = await posts.findAll();
        res.json({msg: list_posts});
        
    } catch (error) {
        console.log(error);
    }
};

export function getById(req,res,next){
    res.json({msg: "hola mundo"})
};

export function createPost(req,res,next){
    res.json({msg: "hola mundo"})
};

export function updatePost(req,res,next){
    res.json({msg: "hola mundo"})
};

export function deletePost(req,res,next){
    res.json({msg: "hola mundo"})
};