import { Controller, Get } from '@nestjs/common';
import { FirstAppService } from './first-app.service';

@Controller('/api')
export class FirstAppController {
  constructor(private readonly firstAppService: FirstAppService) {}

  @Get('/firstApp')
  getHello(): string {
    return this.firstAppService.getHello();
  }
}
