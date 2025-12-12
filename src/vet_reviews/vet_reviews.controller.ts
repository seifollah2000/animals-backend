import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VetReviewsService } from './vet_reviews.service';
import { CreateVetReviewDto } from './dto/create-vet_review.dto';
import { UpdateVetReviewDto } from './dto/update-vet_review.dto';

@Controller('vet-reviews')
export class VetReviewsController {
  constructor(private readonly vetReviewsService: VetReviewsService) {}

  @Post()
  create(@Body() createVetReviewDto: CreateVetReviewDto) {
    return this.vetReviewsService.create(createVetReviewDto);
  }

  @Get()
  findAll() {
    return this.vetReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vetReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVetReviewDto: UpdateVetReviewDto) {
    return this.vetReviewsService.update(+id, updateVetReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vetReviewsService.remove(+id);
  }
}
