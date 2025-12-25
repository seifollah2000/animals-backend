import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getJwtSecret() {
    return this?.configService?.get<string>('jwt.secret');
  }

  getDbHost() {
    return this.configService.get<string>('database.host');
  }
}
