import { Query, ResolveReference } from '@nestjs/graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateLabelInput } from './dto/create-label.input';
import { Label } from './enitities/label.entity';
import { LabelService } from './label.service';

@Resolver((of) => Label)
export class LabelResolver {
  constructor(private readonly labelService: LabelService) {}

  @Query(() => [Label], {name: 'labels'})
  getAllLabels(): Promise<Label[]> {
    return this.labelService.fetchAll()
  }

  @Mutation(() => Label)
  createLabel(@Args('createLabelInput') createLabelInput: CreateLabelInput) {
    return this.labelService.store(createLabelInput);
  }

  @Query(() => Label, { name: 'label' , nullable: true})
  findOne(@Args('labelId', { type: () => String }) labelId: string) {
    return this.labelService.fetchOneById(labelId);
  }

  @ResolveReference()
  resolveReference(reference: {__typename: string, _id: string}): Promise<Label> {
    return this.labelService.fetchOneById(reference._id)
  }
}
