import { ObjectType, Field, Directive } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
@Directive('@key(fields: "_id")')
export class Project {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String, { nullable: true })
  description: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
