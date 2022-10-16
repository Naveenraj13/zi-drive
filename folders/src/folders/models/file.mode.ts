import { getModelForClass, prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class Files {

    @prop()
    fileContent: string;

    @prop()
    userId: Types.ObjectId;

    @prop({ default: null })
    folderId: Types.ObjectId;

    @prop({ default: 1, enum: [0, 1] })
    status: number;

    @prop({ default: Date.now() })
    createdAt: Date;

    static get model() {
        return getModelForClass(Files);
    }

    static get modelName(): string {
        return this.model.modelName;
    }
}
