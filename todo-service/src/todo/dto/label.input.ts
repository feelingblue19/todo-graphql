import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LabelInput {
    @Field(() => String)
    id: string
}