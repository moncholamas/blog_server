export function handlerError(err, req, res, next){

    //si es un error generado desde Sequelize al validar el modelo
    if(err.errors !== undefined){
        return res.status(400).send({ msg: err.errors[0].message });
    }

    //si es un error generado de forma manual 
    if(err.message!== undefined){
        //rompe la restriccion de la clave foranea -> no existe la categoria
        if(err.name==='SequelizeForeignKeyConstraintError'){
            return res.status(400).send({ msg: 'la categoria ingresada no existe'}) }

        return res.status(400).send({
            msg: err,
        });
    }


    //si es una excepcion 
    console.error(err);
    return res.status(500).send({ msg: 'ocurrió un error inesperado' });
}