import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { FileDto } from './dto/file.dto';
import { FolderDto } from './dto/folder.dto';
import { MoveFileDto } from './dto/moveFile.dto';
import { Files } from './models/file.mode';
import { Folders } from './models/folder.model';

@Injectable()
export class FoldersService {
    constructor(
        @InjectModel(Folders.modelName) private folderModel: ReturnModelType<typeof Folders>,
        @InjectModel(Files.modelName) private fileModel: ReturnModelType<typeof Files>) { }

    async createFolder(folderDto: FolderDto) {
        return await new this.folderModel(folderDto).save();
    }

    async getFolders(userId: string) {
        return await new this.folderModel.findOne({ userId, status: 1 })
    }

    async addFile(fileDto: FileDto) {
        return await new this.fileModel(fileDto).save();
    }

    async removeFile(fileId: string) {
        return await new this.fileModel.findOneAndUpdate(fileId, { status: 0 }, { new: true })
    }

    async viewFiles(userId: string) {
        return await new this.fileModel.findOne({ userId, status: 1 })
    }

    async moveFile(moveFileDto: MoveFileDto) {
        return await new this.fileModel.findByIdAndUpdate(moveFileDto.fileId, { folderId: moveFileDto.folderId }, { new: true })
    }
}
