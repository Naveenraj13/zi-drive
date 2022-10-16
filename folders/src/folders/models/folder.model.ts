import { getModelForClass, prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class Folders {

    @prop()
    folderName: string;

    @prop()
    userId: Types.ObjectId;

    @prop()
    mainFolderId: Types.ObjectId;

    @prop({ default: 1, enum: [0, 1] })
    status: number;

    @prop({ default: Date.now() })
    createdAt: Date;
    
    static get model() {
        return getModelForClass(Folders);
    }

    static get modelName(): string {
        return this.model.modelName;
    }
}
