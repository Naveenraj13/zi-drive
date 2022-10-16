import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MoveFileDto {

  @ApiProperty()
  @IsNotEmpty()
  fileId: string;

  @ApiProperty()
  @IsNotEmpty()
  folderId: string;

}
