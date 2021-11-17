import Express,{json, urlencoded} from 'express';
import router from './routers/postsRouter.js';

const app = Express();

//middlewares
app.use(json());
app.use(urlencoded({extended:false}));

//configuracion
app.set('port', process.env.PORT || 3000);

//routes
app.use('/posts',router)


export default app;