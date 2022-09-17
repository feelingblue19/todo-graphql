import { Directive, Field, ID, ObjectType, ResolveField } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose'
import { Label } from "./label.entity";
import { Project } from "./project.entity";

@Schema()
@ObjectType()
@Directive('@key(fields: "_id")')
export class Todo {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop()
    @Field(() => String)
    title: string;

    @Prop()
    @Field({nullable: true})
    description?: string;

    @Prop()
    @Field(() => String)
    project_id!: string

    @Prop()
    // @Field(() => Array)
    label_id?: string[]

    @Field(() => Project)
    project?: Project

    @Field(() => [Label])
    labels?: Label[]

}

export const TodoSchema = SchemaFactory.createForClass(Todo)