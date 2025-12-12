import { Module } from '@nestjs/common';
import { VetReviewsService } from './vet_reviews.service';
import { VetReviewsController } from './vet_reviews.controller';

@Module({
  controllers: [VetReviewsController],
  providers: [VetReviewsService],
})
export class VetReviewsModule {}
