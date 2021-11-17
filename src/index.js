import app from './app.js';

function main(){
    app.listen(app.get('port'),()=>{
        console.log('corriendo en el puerto:', app.get('port'));
    });
}

main();


