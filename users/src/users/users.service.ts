import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserDto } from './dto/user.dto';
import { Users } from './models/users.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.modelName) private userModel: ReturnModelType<typeof Users>) { }

    async signup(userDto: UserDto) {
        return await new this.userModel(userDto).save();
    }

    async login(email: string, password: string) {
        return await new this.userModel.findOne({email, password, status: 1})
    }
}
