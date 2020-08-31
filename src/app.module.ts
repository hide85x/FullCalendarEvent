import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './Event/event.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/NestJwtAuth"),
    UserModule,
    AuthModule,
    EventModule
    
  ],
})
export class AppModule { }
