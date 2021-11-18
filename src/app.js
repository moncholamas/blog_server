import Express,{json, urlencoded} from 'express';
import router from './routers/postsRouter.js';
import { handlerError } from './middlewares/handleErrors.js';
const app = Express();

//middlewares para entender las peticiones
app.use(json());
app.use(urlencoded({extended:false}));

//configuracion
app.set('port', process.env.PORT || 3000);

//routes
app.use('/posts',router);

//middleware para el manejo de errores
app.use(handlerError);


export default app;