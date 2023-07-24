import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateWorkExperienceDto } from './dtos/create-work-experience-dto';
import { WorkExperienceService } from './work-experience.service';

@Controller('work-experience')
export class WorkExperienceController {
  constructor(private workExperienceService: WorkExperienceService) {}

  @Get()
  getAllWorkExperiences() {
    return this.workExperienceService.getAllExperiences();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createWorkExperience(@Body() workExperienceData: CreateWorkExperienceDto) {
    return this.workExperienceService.createExperience(workExperienceData);
  }
}
