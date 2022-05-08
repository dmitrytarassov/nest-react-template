import { Injectable } from '@nestjs/common';
import createServer from 'next';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
