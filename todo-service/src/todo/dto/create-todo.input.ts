import { Field, InputType } from "@nestjs/graphql";
import { Label } from "../entities/label.entity";
import { LabelInput } from "./label.input";

@InputType()
export class CreateTodoInput {
    @Field(() => String)
    title: string

    @Field(() => String, {nullable: true})
    description: string

    @Field(() => String)
    project_id: string

    @Field(() => [LabelInput])
    label_id: LabelInput[]
}