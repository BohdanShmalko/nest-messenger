import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { EHttpExceptionMessage } from '../exceptions/http.exception';
import { MIDDLE_KEYS } from './keys.decorator';
import { SecureService } from './secure.service';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private authService: SecureService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const keys = this.reflector.getAllAndOverride(MIDDLE_KEYS, [
        context.getHandler(),
        context.getClass(),
      ]);
      //const jwtData = await this.authService.getJwtData(req.cookies);

      //const jwtKeys = Object.keys(jwtData);
      //if (keys && this.authService.diff(jwtKeys, keys).length) throw '';
      //req.jwtData = jwtData;
      return true;
    } catch (e) {
      throw new UnauthorizedException({
        message: EHttpExceptionMessage.Unauthorized,
      });
    }
  }
}
