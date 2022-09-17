import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Project } from "./entities/project.entity";
import { Todo } from "./entities/todo.entity";
import { TodoService } from "./todo.service";

@Resolver((of) => Project)
export class ProjectResolver {
    constructor(private readonly todoService: TodoService) {}

    @ResolveField((of) => [Todo])
    public todos(@Parent() project: Project): Promise<Todo[]> {
        return this.todoService.fetchByProjectId(project._id)
    }
}