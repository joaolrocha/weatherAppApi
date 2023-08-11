import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { logger } from './winston.config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    logger.info('Metodo getHello foi chamado!')
    return this.appService.getHello();
  }
}
