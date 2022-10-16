import { getModelForClass, prop } from '@typegoose/typegoose';

export class Users {

    @prop()
    name: string;

    @prop()
    email: string;

    @prop()
    password: string;

    @prop({ default: 1, enum: [0, 1] })
    status: number;

    @prop({ default: Date.now() })
    createdAt: Date;
    
    static get model() {
        return getModelForClass(Users);
    }

    static get modelName(): string {
        return this.model.modelName;
    }
}
