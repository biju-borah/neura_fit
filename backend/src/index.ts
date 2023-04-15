import express,{Application, Request, Response} from 'express'; 
const app: Application = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import 'module-alias/register'

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

import user from '@routers/user.router';

app.get('/',(req: Request,res: Response)=>res.send('Hello world'));

app.use('/user',user);

const PORT: Number = Number(process.env.PORT) || 3000

app.listen(PORT,()=>{console.log(`Server listening on http://127.0.0.1:${PORT}`)});