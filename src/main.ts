import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule , { cors: true });

  // app.enableCors({ origin: 'https://svtvapp.vercel.app', credentials: true });

  app.enableCors({
    allowedHeaders: ["*"],
    // origin: [
    //   'http://localhost:3000',
    //   'http://localhost:3000/',
    //   'https://svtvapp.vercel.app',
    //   'https://svtvapp.vercel.app/',
    // ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
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
