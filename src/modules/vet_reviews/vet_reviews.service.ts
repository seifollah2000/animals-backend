import { Injectable } from '@nestjs/common';
import { CreateVetReviewDto } from './dto/create-vet_review.dto';
import { UpdateVetReviewDto } from './dto/update-vet_review.dto';

@Injectable()
export class VetReviewsService {
  create(createVetReviewDto: CreateVetReviewDto) {
    return 'This action adds a new vetReview';
  }

  findAll() {
    return `This action returns all vetReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vetReview`;
  }

  update(id: number, updateVetReviewDto: UpdateVetReviewDto) {
    return `This action updates a #${id} vetReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} vetReview`;
  }
}
