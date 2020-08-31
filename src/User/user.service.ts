import { Injectable, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './Schemas/user.schema';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt'
import { UserCreateDto } from './dto/create-user';

@Injectable()
export class UserService {
    // wczesniej "USer"
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async signIn(userCreateDto: UserCreateDto): Promise<any> {
        const { email, password } = userCreateDto;
        const hashedPsw = await bcrypt.hash(password, 8);
        const newUser = await new this.userModel({
            email: email,
            password: hashedPsw
        });
        try {
            const isUserThere = await this.userModel.find({ email: email }).exec()
            console.log(isUserThere.length ===0)
            if(isUserThere.length ===0) {
            
                const user = await newUser.save();
                return user.email
            }
            else {
                throw new HttpException('User already exist!', HttpStatus.I_AM_A_TEAPOT)

            }
        }
        catch {
            throw new HttpException('User already exist!', HttpStatus.I_AM_A_TEAPOT)
        }
    }
    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec()
        return users.map(us => us.email)
    }
    async GetUser(email: string): Promise<User> {
        const user = await this.userModel.findOne({ email: email }).exec();
        if (!user) {
            throw new HttpException("No such a user id database!", HttpStatus.NOT_FOUND)
        }
        return user
    }

}
