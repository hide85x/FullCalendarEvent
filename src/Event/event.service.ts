import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './event.schema';
import { CreateEventDto } from './create-event.dto';

@Injectable()
export class EventService {

    constructor(@InjectModel(Event.name) private eventModel: Model<Event>) { }

    async createEvent(createEventDto: CreateEventDto): Promise<any> {
        const { title, start, end, color, actors, techs} = createEventDto;
        console.log(createEventDto)
        try {
            const newEvent = await this.eventModel({
                title,
                start,
                end,
                color,
                actors,
                techs,
            }).save()//.exec()
            console.log('Weve got new event comming up!')
            return newEvent
        }
        catch (err) { console.log(err) }

    };

    async getEvents(): Promise<Event[]> {
        const events = await this.eventModel.find()
        // dzieki await takze w controlerze dostaujemy juz resolvowany 
        //promise, czyli sam result
        console.log(events)
        return events
    }
}
