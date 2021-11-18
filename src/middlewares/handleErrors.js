export function handlerError(err, req, res, next){

    //si es un error generado desde Sequelize al validar el modelo
    if(err.errors !== undefined){
        return res.status(400).send({
            msg: err.errors[0].message,
        });
    }

    //si es un error generado de forma manual 
    if(err.message!== undefined){
        return res.status(400).send({
            msg: err.message,
        });
    }


    //si es una excepcion 
    console.log(err);
    return res.status(500).send({
        msg: 'ocurrió un error inesperado',
    });
}