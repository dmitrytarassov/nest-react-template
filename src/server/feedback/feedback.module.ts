import { Module } from '@nestjs/common';
import { FeedbackController } from '@backend/feedback/feedback.controller';
import { FeedbackService } from '@backend/feedback/feedback.service';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
