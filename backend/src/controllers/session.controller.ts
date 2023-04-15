import {ObjectId} from 'mongodb'
import {Request , Response} from 'express'
import {SessionModel} from '@models/session.model'
import {client} from '@configs/mongo'

const connection = async ()=>{
    const db = (await client.connect()).db("app");
    const collection = db.collection("sessions");
    return collection;
}

export default {
    get : async (req: Request,res: Response) => {
        try{
            const sessions = await connection();
            const sessionsCursor = sessions.find({
                user_id : new ObjectId(req.params.user_id)
            });

            let result: Array<object> = [];
            
            await sessionsCursor.forEach((elem)=> {
                const objStr = JSON.stringify(elem);
                result.push(JSON.parse(objStr));
            });

            res.json({result: result}).status(200);
        } catch(err) {
            res.json({result: err}).status(500);
        }
    },
    post : async (req: Request,res: Response) => {
        
        const session = new SessionModel(req.body);
        try{
            const collection = await connection();
            const result = await collection.insertOne(session);
            res.json({result: result}).status(200);
        } catch(err) {
            res.json({result: err}).status(500);
        }
        
    }
}