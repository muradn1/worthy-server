import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService
  ) { }

  @Get()
  getMainEntry(@Res({passthrough: true}) res) {
    const mainEntry = this.configService.get<string>('mainEntry');
    if (mainEntry) {
      return res.redirect(mainEntry);
    }
    return this.appService.getHello();
  }
}
