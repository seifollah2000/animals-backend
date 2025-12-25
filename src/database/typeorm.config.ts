//database/typeorm.config.ts
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../modules/users/entities/user.entity';

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService?.get<string>('database.host') || 'localhost',
  port: configService?.get<number>('database.port') || 5432,
  username: configService.get<string>('database.username') || 'postgres',
  password: configService.get<string>('database.password') || 'postgres',
  database: configService.get<string>('database.database') || 'my_db',
  entities: [User],
  migrations: ['dist/database/migrations/*.js'],
  synchronize: configService.get<string>('app.env') === 'development',
  logging: configService.get<string>('app.env') === 'development',
});
