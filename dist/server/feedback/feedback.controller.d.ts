import { FeedbackService } from '@backend/feedback/feedback.service';
import { SessionType } from '@lib/types/SessionType';
declare class InsuranceDto {
    email: string;
    message: string;
}
export declare class FeedbackController {
    private readonly service;
    constructor(service: FeedbackService);
    insurance(dto: InsuranceDto, session: SessionType): Promise<{
        ok: boolean;
    }>;
}
export {};
