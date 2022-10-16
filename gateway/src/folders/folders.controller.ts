import { BadRequestException, Body, Controller, HttpCode, HttpStatus, Inject, Param, Post, Get,Delete, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { FileDto } from './dto/file.dto';
import { FolderDto } from './dto/folder.dto';
import { MoveFileDto } from './dto/moveFile.dto';
@ApiTags('folders')
@Controller('folders')
export class FoldersController {
    constructor(@Inject('FOLDER_SERVICE') private readonly folderServiceClient: ClientProxy) { }

    @Post('createFolder')
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
    async createFolder(@Body() folderDto: FolderDto) {
        const result = await firstValueFrom(
            this.folderServiceClient.send({ cmd: 'createFolder', role: 'folders' }, folderDto)
        );
        if (result) {
            return {
                status: 200,
                message: 'Success'
            }
        } else {
            return {
                status: 202,
                message: 'Failed'
            }
        }
    }

    @Get('getFolders/:userId')
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
    async getFolders(@Param('userId') userId: string) {
        const result = await firstValueFrom(
            this.folderServiceClient.send({ cmd: 'getFolders', role: 'folders' }, userId)
        );
        if (result) {
            return {
                status: 200,
                message: 'Success'
            }
        } else {
            return {
                status: 202,
                message: 'Failed'
            }
        }
    }

    @Post('addFile')
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
    async addFile(@Body() fileDto: FileDto) {
        const result = await firstValueFrom(
            this.folderServiceClient.send({ cmd: 'addFile', role: 'folders' }, fileDto)
        );
        if (result) {
            return {
                status: 200,
                message: 'Success'
            }
        } else {
            return {
                status: 202,
                message: 'Failed'
            }
        }
    }

    @Delete('removeFile/:fileId')
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
    async removeFile(@Param('fileId') fileId: string) {
        const result = await firstValueFrom(
            this.folderServiceClient.send({ cmd: 'removeFile', role: 'folders' }, fileId)
        );
        if (result) {
            return {
                status: 200,
                message: 'Success'
            }
        } else {
            return {
                status: 202,
                message: 'Failed'
            }
        }
    }

    @Get('viewFiles/:userId')
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
    async viewFiles(@Param('userId') userId: string) {
        const result = await firstValueFrom(
            this.folderServiceClient.send({ cmd: 'viewFiles', role: 'folders' }, userId)
        );
        if (result) {
            return {
                status: 200,
                message: 'Success'
            }
        } else {
            return {
                status: 202,
                message: 'Failed'
            }
        }
    }

    @Post('moveFile')
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
    async moveFile(@Body() moveFileDto: MoveFileDto) {
        const result = await firstValueFrom(
            this.folderServiceClient.send({ cmd: 'moveFile', role: 'folders' }, moveFileDto)
        );
        if (result) {
            return {
                status: 200,
                message: 'Success'
            }
        } else {
            return {
                status: 202,
                message: 'Failed'
            }
        }
    }
}
