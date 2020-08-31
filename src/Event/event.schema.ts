import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose'

@Schema()
export class Event extends Document {
    @Prop({
    trim: true,
    })
    title: string;

    @Prop({})
    start: string;

    @Prop({})
    end: string;
    
    @Prop({})
    color:string
}

    export const EventSchema = SchemaFactory.createForClass(Event)
