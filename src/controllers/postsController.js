import initModels from "../models/init_models.js";
import posts from "../models/posts.js";
import categories from "../models/categories.js";
import sequelize from "../db/connection/connection.js";
import {verify_url, verify_format} from '../helpers/verify.js'

export async function getAll(req,res,next){
    try {
        initModels(sequelize);

        const list_posts = await posts.findAll();

        if(list_posts.length===0){throw new Error('no existen posts cargados actualmente')};

        res.json({msg: list_posts});
        
    } catch (error) {
        next(error);
    }
};

export async function getById(req,res,next){
    const id = req.params.id;

    try {
        initModels(sequelize);

        const post = await posts.findByPk(id,{attributes:{exclude:['id_category']},include:{model:categories,as:'category'}});
        
        if(!post){ throw new Error(`no existe un post con el id: ${id}`)}
        
        res.json({msg: post});
        
    } catch (error) {
        next(error);
    }
    
};

export async function createPost(req,res,next){
    const {title,content,img,id_category} = req.body;
    try {
        initModels(sequelize);

        //validar la url -> si no existe lanza un error
        await verify_url(img);

        //validar el formato -> si es otro lanza un error
        verify_format(img, ['.jpg','.png','.webp','.svg']);


        const new_post = await posts.create({
            title,
            content,
            img,
            id_category
        });
    
        res.json({msg: new_post})
        
    } catch (error) {
        next(error);
    }
};

export async function updatePost(req,res,next){
    const id = req.params.id
    const {title,content,img,id_category} = req.body;
    try {
        initModels(sequelize);

        //validar la url -> si no existe lanza un error
        await verify_url(img);

        //validar el formato -> si es otro lanza un error
        verify_format(img, ['.jpg','.png','.webp','.svg']);

        const updated_post = await posts.update({
            title,
            content,
            img,
            id_category
        },{where:{id_post:id}});

       if(updated_post[0]===0){throw new Error(`no se encontraron coincidencias para actualizar con el id: ${id}`)}

        res.json({msg: 'post actualizado correctamente'});
        
    } catch (error) {
        next(error);
    }
};

export async function deletePost(req,res,next){
    const id = req.params.id;
    try {
        initModels(sequelize);
        const deleted_post = await posts.destroy({where:{id_post:id}});

        if(deleted_post===0){throw new Error(`no se encontraron coincidencias para borrar con el id ${id}`)}

        res.json({msg: 'post eliminado correctamente'})
        
    } catch (error) {
        next(error);
    }
};