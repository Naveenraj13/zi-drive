import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MoveFileDto {

  @ApiModelProperty()
  @IsNotEmpty()
  fileId: string;

  @ApiModelProperty()
  @IsNotEmpty()
  folderId: string;

}
