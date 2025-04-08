import { prop, getModelForClass, modelOptions, DocumentType } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

@modelOptions({ schemaOptions: { timestamps: true } })
export class UserClass extends TimeStamps {
  @prop({ required: true })
  fullName!: string;

  @prop({ required: true })
  imageUrl!: string;

  @prop({ required: true, unique: true })
  clerkId!: string;
}

export const User = getModelForClass(UserClass);
export type UserDocument = DocumentType<UserClass>;
