import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventService } from './event.service';
import { EventSchema } from './event.schema';
import { EventController } from './event.controller';

@Module({
  imports:[MongooseModule.forFeature([{name:"Event", schema: EventSchema}])],
  providers:[EventService],
  controllers:[EventController],
  exports:[EventService],
})
export class EventModule {}
