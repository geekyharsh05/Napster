import { getModelForClass, prop, modelOptions } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { DocumentType } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
class MessageClass extends TimeStamps {
  @prop({ required: true })
  senderId!: string;

  @prop({ required: true })
  receiverId!: string;

  @prop({ required: true })
  content!: string;
}

export const Message = getModelForClass(MessageClass);
export type MessageDocument = DocumentType<MessageClass>;
