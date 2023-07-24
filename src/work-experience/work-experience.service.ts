import { Injectable } from '@nestjs/common';
import { CreateWorkExperienceDto } from './dtos/create-work-experience-dto';

@Injectable()
export class WorkExperienceService {
  getAllExperiences() {
    return {};
  }

  createExperience(workExperienceData: CreateWorkExperienceDto) {
    return workExperienceData;
  }
}
