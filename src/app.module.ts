import { Module } from '@nestjs/common';
import { WorkExperienceModule } from './work-experience/work-experience.module';
import { WorkExperienceService } from './work-experience/work-experience.service';

@Module({
  imports: [WorkExperienceModule],
  controllers: [],
  providers: [WorkExperienceService],
})
export class AppModule {}
