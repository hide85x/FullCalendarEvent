import {Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { jwtConst } from "./jwtConst";



@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExp: false,
            secretOrKey: jwtConst.secret
        })
    } 
    async validate(payload:any) {
        return {email: payload.email, userId: payload.sub}
    }
}