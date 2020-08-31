import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from 'src/app.controller';
import { jwtConst } from './jwtConst';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports:[UserModule, PassportModule, 
    JwtModule.register({
      secret: jwtConst.secret,
      signOptions:{expiresIn: '60s'}
    })
  
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports:[AuthService],
  controllers:[AppController]
})
export class AuthModule {}
