import { Module } from '@nestjs/common';
import { FoldersController } from './folders.controller';
import { FoldersService } from './folders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Folders } from './models/folder.model';
import { Files } from './models/file.mode';

@Module({
  imports: [ MongooseModule.forFeature([ 
    { name: Folders.modelName, schema: Folders.model.schema },
    { name: Files.modelName, schema: Files.model.schema }])],
  controllers: [FoldersController],
  providers: [FoldersService]
})
export class FoldersModule {}
