import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaymentsModule } from './payments/payments.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { VaccinesModule } from './vaccines/vaccines.module';
import { MedicalRecordsModule } from './medical_records/medical_records.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { VetReviewsModule } from './vet_reviews/vet_reviews.module';
import { VetsModule } from './vets/vets.module';
import { ClinicsModule } from './clinics/clinics.module';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'mydb',
      entities: [User],
      synchronize: true,
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
