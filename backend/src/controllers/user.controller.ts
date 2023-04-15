import {Request , Response} from 'express'
import {User, UserModel} from '@models/user.model'
import {client} from '@configs/mongo'

const connection = async ()=>{
    const db = (await client.connect()).db("app");
    const collection = db.collection("users");
    return collection;
}

export default {
    get : async (req: Request,res: Response) => {
        try{
            const users = await connection();
            const usersCursor = users.find();

            let result: Array<object> = [];
            
            await usersCursor.forEach((elem)=> {
                const objStr = JSON.stringify(elem);
                result.push(JSON.parse(objStr));
            });
            
            res.json({result: result}).status(200);
        } catch(err) {
            res.json({result: err}).status(500);
        }
    },
    post : async (req: Request,res: Response) => {
        
        const user = new UserModel(req.body);
        try{
            const collection = await connection();
            const result = await collection.insertOne(user);
            res.json({result: result}).status(200);
        } catch(err) {
            res.json({result: err}).status(500);
        }

    }
}