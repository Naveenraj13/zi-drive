import { BadRequestException, Body, Controller, HttpCode, HttpStatus, Inject, Param, Post, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { UserDto } from './dto/user.dto';
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy) { }

    @Post('signup')
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
    async signup(@Body() userDto: UserDto) {
        const result = await firstValueFrom(
            this.userServiceClient.send({ cmd: 'signup', role: 'user' }, userDto)
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

    @Post('login/:email/:password')
    @HttpCode(200)
    @ApiResponse({ status: HttpStatus.OK })
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: BadRequestException })
    async login(@Param('email') email: string,
        @Param('password') password: string) {
        const result = await firstValueFrom(
            this.userServiceClient.send({ cmd: 'login', role: 'user' }, { email, password })
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
