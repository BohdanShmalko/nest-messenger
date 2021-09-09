import { Module } from '@nestjs/common';
import { SController } from './s/s.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [SController, AuthController],
  providers: [AuthService]
})
export class AuthModule {}
