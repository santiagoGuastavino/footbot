// Dependencies
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

@Schema({ timestamps: true, versionKey: false })
export class Chat {
  @Prop({
    type: ObjectId,
    required: true,
    nullable: false,
    unique: true,
  })
  _id: ObjectId;

  @Prop({
    type: Number,
    required: true,
    nullable: false,
    unique: true,
  })
  id: number;

  @Prop({
    type: String,
    required: true,
    nullable: true,
    default: null,
  })
  first_name: string;

  @Prop({
    type: String,
    required: true,
    nullable: true,
    default: null,
  })
  username: string;

  @Prop({
    type: String,
    required: true,
    nullable: true,
    default: null,
  })
  title: string;

  @Prop({
    type: String,
    required: true,
    nullable: false,
  })
  type: string;

  @Prop({
    type: Boolean,
    required: false,
    nullable: true,
    default: null,
  })
  all_members_are_administrators: boolean;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
