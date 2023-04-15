import {MongoClient} from 'mongodb';
import dotenv from 'dotenv'; 
dotenv.config();

const uri = process.env.MONGO_URL as string;
export const client: MongoClient = new MongoClient(uri,{retryWrites: true, w:"majority"});