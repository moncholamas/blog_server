import urlExist from "url-exist";

export function verify_url(url){
    return new Promise(async function (resolve,reject){
        const imgExists = await urlExist(url);

        //si no existe el recurso lanzo un error y lo resuelvo con el middleware
        if(!imgExists){reject(new Error('el recurso ingresado para la imagen no existe'))}

        resolve(true);
    });
}


export function verify_format(url, formats){
    //saco la extension del enlace
    const extension = (url.substring(url.lastIndexOf("."))).toLowerCase();

    //busco si coincide con alguno de los formatos permitidos
    const valid = formats.some(format=> format === extension);

    //si no está en el array lanzo un error
    if(!valid){throw new Error('ingrese un formato de imagen válido')}

    return true;
}