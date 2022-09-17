import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Label } from "./entities/label.entity";
import { Project } from "./entities/project.entity";
import { Todo } from "./entities/todo.entity";
import { TodoService } from "./todo.service";

@Resolver((of) => Label)
export class LabelResolver {
    constructor(private readonly todoService: TodoService) {}

    @ResolveField((of) => [Todo])
    public todos(@Parent() label: Label): Promise<Todo[]> {
        return this.todoService.fetchByLabelId(label._id)
    }
}