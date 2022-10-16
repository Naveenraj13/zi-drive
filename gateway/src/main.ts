import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerOptions = new DocumentBuilder()
      .setTitle('ZI DRIVE')
      .setDescription('API documentation')
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup(`api/docs`, app, swaggerDoc);

  const microservice = app.connectMicroservice({
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        protoPath: join(__dirname, ''),
      },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
