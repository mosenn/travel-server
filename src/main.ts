import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //* work on local
  // app.enableCors();
  //* test
  // app.enableCors({ allowedHeaders: ["*"] });
  //* chat gpt

  // Enable CORS for your Vercel deployment
    //* work on local and sv is not work
  // app.enableCors({
  //   origin: [
  //     'https://teravapp.vercel.app',
  //     'http://localhost:3000',
  //     'https://teravapp.vercel.app/',
  //   ],
  //   allowedHeaders: ['Content-Type'],
  //   methods: ['POST', 'GET', 'PUT', 'DELETE'], // Only allow POST requests, adjust according to your needs
  // });
  //* meduim website

  app.enableCors({
      origin: [
      'https://teravapp.vercel.app',
      'http://localhost:3000',
      'https://teravapp.vercel.app/',
    ],
    methods: [ "GET", "POST", "PUT", "DELETE","OPTIONS", "PATCH"],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
 });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3020);
}
bootstrap();
