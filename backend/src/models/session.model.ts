import mongoose,{ Schema, InferSchemaType, Types } from 'mongoose';
import {Exercise} from '@models/exercise.model'

const schema = new Schema({
  id: {type: String, required: true, unique: true},
  user_id: {type: String, required: true},
  datetime: {type: Date, required: true},
  exercise: {type: Types.DocumentArray<Exercise>, required: true},
});

export type Session = InferSchemaType<typeof schema>;
export const SessionModel = mongoose.model('Session', schema);