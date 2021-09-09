import { SetMetadata } from '@nestjs/common';

export const MIDDLE_KEYS = 'KEYS';

export const Keys = (...keys: string[]) =>
  SetMetadata(MIDDLE_KEYS, [...keys, 'iat']);
