import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import {PassportStrategy } from '@nestjs/passport'
import { AuthService } from "./auth.service";

@Injectable()

export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) { // bez private nie mozemy uzyc serviceu w metodzie validate
        super({usernameField: 'email'});
    }
    async validate(usernameField :string, password: string): Promise<any> {
        
       const user= await this.authService.validateUser(usernameField, password)
       if (!user) {
           throw new UnauthorizedException()
       }
       return user
    }
}