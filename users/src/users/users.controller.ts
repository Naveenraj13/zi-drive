import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @MessagePattern({ cmd: 'signup', role: 'user' })
    public async signup(@Payload() userDto: UserDto): Promise<any> {
      return await this.usersService.signup(userDto);
    }

    @MessagePattern({ cmd: 'login', role: 'user' })
    public async login(@Payload() data: any): Promise<any> {
      return await this.usersService.login(data.email, data.password);
    }
}
