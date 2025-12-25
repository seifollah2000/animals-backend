import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { PrescriptionsModule } from './modules/prescriptions/prescriptions.module';
import { VaccinesModule } from './modules/vaccines/vaccines.module';
import { MedicalRecordsModule } from './modules/medical_records/medical_records.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { VetReviewsModule } from './modules/vet_reviews/vet_reviews.module';
import { VetsModule } from './modules/vets/vets.module';
import { ClinicsModule } from './modules/clinics/clinics.module';
import { PetsModule } from './modules/pets/pets.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configs from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('database.host'),
        port: config.get<number>('database.port'),
        username: config.get('database.username'),
        password: config.get('database.password'),
        database: config.get('database.database'),
        autoLoadEntities: true,
        synchronize: config.get('app.env') === 'development',
        logging: config.get('app.env') === 'development',
      }),
    }),
    UsersModule,
    PetsModule,
    ClinicsModule,
    VetsModule,
    VetReviewsModule,
    AppointmentsModule,
    MedicalRecordsModule,
    VaccinesModule,
    PrescriptionsModule,
    PaymentsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
