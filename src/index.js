import app from './app.js';
import sequelize from './db/connection/connection.js';

async function main(){
    try {
        //conexion a la DB
        await sequelize.authenticate();

        //arrancar el servidor
        app.listen(app.get('port'),()=>{
            console.log('corriendo en el puerto:', app.get('port'));
        });
        
    } catch (error) {
        console.log(error);
    }  
}

main();


