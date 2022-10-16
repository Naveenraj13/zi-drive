import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { FoldersController } from './folders/folders.controller';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  controllers: [AppController, UsersController, FoldersController],
  providers: [
    AppService,
    {
      provide: 'USER_SERVICE',
      useFactory: () => {
        const options: any = {
            transport: Transport.RMQ,
            options: {
              urls: ['RABBITMQ'],
              queue: 'USER_QUEUE_NAME',
              queueOptions: {
                durable: false,
              },
          }
        };
        return ClientProxyFactory.create(options);
      },
    },
    {
      provide: 'FOLDER_SERVICE',
      useFactory: () => {
        const options: any = {
            transport: Transport.RMQ,
            options: {
              urls: ['RABBITMQ'],
              queue: 'FOLDER_QUEUE_NAME',
              queueOptions: {
                durable: false,
              },
          }
        };
        return ClientProxyFactory.create(options);
      },
    },
  ],
})
export class AppModule {}
