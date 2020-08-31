import { Injectable, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/user/Schemas/user.schema';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.GetUser(email)
        const correctPsw= await bcrypt.compare(password, user.password)
        console.log(correctPsw)
            if(user && correctPsw) {
                const { password, ...result} = user
                return user
            }
            if(!correctPsw) {
                throw new HttpException("Password incorect!", HttpStatus.FORBIDDEN)
            }
            
    }
    async login(user: any){
        const payload= { email: user.email, sub: user._id}
        return {
            access_tkn: await this.jwtService.sign(payload),
            email: user.email
        }
    }
}
