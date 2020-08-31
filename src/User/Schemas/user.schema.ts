import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose'

@Schema()
export class User extends Document {
    @Prop({
        required: true, trim: true, lowerCase: true, unique: true
    })
    email: string;

    @Prop({})
    password: string
    }

    export const UserSchema = SchemaFactory.createForClass(User)
