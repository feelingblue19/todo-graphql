import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateProjectInput } from './create-project.input';

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @Field(() => String)
  _id: string;
}
