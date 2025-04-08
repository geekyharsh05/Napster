import { getModelForClass, prop, modelOptions, Ref } from "@typegoose/typegoose";
import { Album, AlbumClass } from "./album.model";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { DocumentType } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
export class SongClass extends TimeStamps {
  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  artist!: string;

  @prop({ required: true })
  imageUrl!: string;

  @prop({ required: true })
  audioUrl!: string;

  @prop({ required: true })
  duration!: number;

  @prop({ ref: () => Album })
  albumId?: Ref<AlbumClass>;
}

export const Song = getModelForClass(SongClass);
export type SongDocument = DocumentType<SongClass>;
