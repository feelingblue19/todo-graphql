import { Args, Mutation, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => [Project], { name: 'projects' })
  getAllProjects() {
    return this.projectService.fetchAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.projectService.fetchOneById(id);
  }

  @Mutation(() => Project)
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.store(createProjectInput);
  }

  @ResolveReference()
  resolveReference(reference: {__typename: string, _id: string}): Promise<Project> {
    return this.projectService.fetchOneById(reference._id)
  }
}
