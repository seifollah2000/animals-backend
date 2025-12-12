import { PartialType } from '@nestjs/mapped-types';
import { CreateVetReviewDto } from './create-vet_review.dto';

export class UpdateVetReviewDto extends PartialType(CreateVetReviewDto) {}
