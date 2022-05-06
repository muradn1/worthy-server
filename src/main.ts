import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  app.useStaticAssets(join(__dirname, '..', 'images'),{
    prefix: '/images/',
  });
  await app.listen(port);
  console.log(`server listening on port ${port}`)
}
bootstrap();
