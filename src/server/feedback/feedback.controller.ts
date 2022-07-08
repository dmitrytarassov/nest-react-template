import { Body, Controller, Post, Session } from '@nestjs/common';
import { FeedbackService } from '@backend/feedback/feedback.service';
import { SessionType } from '@lib/types/SessionType';

class InsuranceDto {
  email: string;
  message: string;
}

@Controller('api/feedback')
export class FeedbackController {
  constructor(private readonly service: FeedbackService) {}

  @Post('insurance')
  async insurance(@Body() dto: InsuranceDto, @Session() session: SessionType) {
    try {
      const lastSend = session.insuranceRequestSend
        ? new Date(session.insuranceRequestSend)
        : new Date(+new Date() - 10000001);

      const goodTimeToSend = +new Date() - +lastSend >= 10000000;

      if (goodTimeToSend) {
        const message = `<b>Заказ страховки с сайта.</b>\n<code>${dto.email}</code>\n${dto.message}`;
        session.insuranceRequestSend = new Date().toString();
        await this.service.send(message);
      }

      return {
        ok: true,
      };
    } catch (e) {
      console.log(e);
      return {
        ok: false,
      };
    }
  }
}
