import { ObjectType, Field, Directive } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
@Directive('@key(fields: "_id")')
export class Label {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  name: string;
}

export const LabelSchema = SchemaFactory.createForClass(Label);
