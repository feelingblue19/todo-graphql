import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description: string;
}
