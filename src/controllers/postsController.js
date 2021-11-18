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

export async function getById(req,res,next){
    const id = req.params.id;

    try {
        initModels(sequelize);
        const post = await posts.findByPk(id);
        console.log(post);
        if(!post){ throw new Error(`no existe un post con el id: ${id}`)}
        
        res.json({msg: post});
        
    } catch (error) {
        console.log(error);
    }
    
};

export async function createPost(req,res,next){
    const {title,content,img} = req.body;
    try {
        initModels(sequelize);
        const new_post = await posts.create({
            title,
            content,
            img
        });
    
        res.json({msg: new_post})
        
    } catch (error) {
        res.json({msg: error});
        console.log(error);
    }
};

export function updatePost(req,res,next){
    res.json({msg: "hola mundo"})
};

export function deletePost(req,res,next){
    res.json({msg: "hola mundo"})
};