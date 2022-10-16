import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FolderDto {
    
  @ApiProperty()
  @IsNotEmpty()
  folderName: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

}
