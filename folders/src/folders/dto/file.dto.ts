import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FileDto {

  @ApiModelProperty()
  @IsNotEmpty()
  folderId: string;

  @ApiModelProperty()
  @IsNotEmpty()
  userId: string;

  @ApiModelProperty()
  @IsNotEmpty()
  fileContent: string;

}
