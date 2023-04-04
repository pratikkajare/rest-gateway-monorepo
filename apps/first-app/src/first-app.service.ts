import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstAppService {
  getHello(): string {
    return 'Hello from another service';
  }
}
