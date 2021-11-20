import urlExist from "url-exist";

export function verify_url(url){
    return new Promise(async function (resolve,reject){
        const imgExists = await urlExist(url);

        //si no existe el recurso lanzo un error y lo resuelvo con el middleware
        if(!imgExists){reject(new Error('el recurso ingresado para la imagen no existe'))}

        resolve(true);
    });
}