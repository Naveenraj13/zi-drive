import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FolderDto {
    
  @ApiModelProperty()
  @IsNotEmpty()
  folderName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  userId: string;

}
