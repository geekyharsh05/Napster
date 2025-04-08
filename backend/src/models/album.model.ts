import { getModelForClass, prop, modelOptions, Ref, DocumentType } from "@typegoose/typegoose";
import { SongClass } from "./song.model";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

@modelOptions({ schemaOptions: {timestamps: true} })
export class AlbumClass extends TimeStamps {
  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  artist!: string;

  @prop({ required: true })
  imageUrl!: string;

  @prop({ required: true })
  releaseYear!: number;

  @prop({ ref: () => SongClass, default: [] })
  songs!: Ref<SongClass>[];
}

export const Album = getModelForClass(AlbumClass);
export type AlbumDocument = DocumentType<AlbumClass>;
