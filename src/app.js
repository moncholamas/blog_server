import Express,{json, urlencoded} from 'express';

const app = Express();

//middlewares
app.use(json());
app.use(urlencoded({extended:false}));

//configuracion
app.set('port', process.env.PORT || 3000);


export default app;