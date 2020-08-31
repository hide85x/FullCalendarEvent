import { Controller, Post, Body, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './create-event.dto';
import {Event } from './event.schema';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService){}

    @Post('/add') 
    async createNewDate(@Body() createEventDto: CreateEventDto):Promise<Event> {
        console.log('controller here, add new event');
        return await this.eventService.createEvent(createEventDto)
    }

    @Get('/all')
    async getAllEvents() {
        return await this.eventService.getEvents()
    }
}
