import { Module } from '@nestjs/common';
import { WorkExperienceController } from './work-experience.controller';
import { WorkExperienceService } from './work-experience.service';

@Module({
  imports: [],
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService],
})
export class WorkExperienceModule {}
