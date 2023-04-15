import mongoose,{ Schema, InferSchemaType, Types } from 'mongoose';

const schema = new Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    reps: {type: Types.Array<Number>, required: true},
});

export type Exercise = InferSchemaType<typeof schema>;
