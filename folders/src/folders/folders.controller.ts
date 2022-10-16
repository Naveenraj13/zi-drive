import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FileDto } from './dto/file.dto';
import { FolderDto } from './dto/folder.dto';
import { MoveFileDto } from './dto/moveFile.dto';
import { FoldersService } from './folders.service';

@Controller('folders')
export class FoldersController {
    constructor(private readonly foldersService: FoldersService) { }

    @MessagePattern({ cmd: 'createFolder', role: 'folders' })
    public async createFolder(@Payload() folderDto: FolderDto): Promise<any> {
      return await this.foldersService.createFolder(folderDto);
    }

    @MessagePattern({ cmd: 'getFolders', role: 'folders' })
    public async getFolders(@Payload() userId: string): Promise<any> {
      return await this.foldersService.getFolders(userId);
    }

    @MessagePattern({ cmd: 'addFile', role: 'folders' })
    public async addFile(@Payload() fileDto: FileDto): Promise<any> {
      return await this.foldersService.addFile(fileDto);
    }

    @MessagePattern({ cmd: 'removeFile', role: 'folders' })
    public async removeFile(@Payload() fileId: string): Promise<any> {
      return await this.foldersService.removeFile(fileId);
    }

    @MessagePattern({ cmd: 'viewFiles', role: 'folders' })
    public async viewFiles(@Payload() userId: string): Promise<any> {
      return await this.foldersService.viewFiles(userId);
    }

    @MessagePattern({ cmd: 'moveFile', role: 'folders' })
    public async moveFile(@Payload() moveFileDto: MoveFileDto): Promise<any> {
      return await this.foldersService.moveFile(moveFileDto);
    }
}
