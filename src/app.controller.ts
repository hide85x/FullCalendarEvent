import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private userService: UserService,
    private authService: AuthService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    async getProfile(@Request() req) {
      return this.userService.GetUser(req.user.email)
    }


    @UseGuards(LocalAuthGuard)
    @Post('/auth/login')
    async login(@Request() req) {
      console.log('login meth from app.controller')
      return this.authService.login(req.user);
    }
  }