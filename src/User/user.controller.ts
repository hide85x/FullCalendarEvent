import { Body, Controller, Get, Post, Param, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/create-user';
import { User } from './Schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/add')
    async signIn(@Body() userCreateDto: UserCreateDto) {
        console.log('signin method in service')
        return await this.userService.signIn(userCreateDto);
    }
    @UseGuards(JwtAuthGuard)
    @Get('/all')
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers()
    }
    @Get(':email')

    async GetUser(@Param('email') email): Promise<User> {
        console.log(email)
        return this.userService.GetUser(email)
    }
    // @UseGuards(AuthGuard('local'))
    // @Post('/login')
    // async login(@Request() req) {
    //     return req.user
    // }
}
