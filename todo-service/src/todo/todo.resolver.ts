import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Label } from './entities/label.entity';
import { Project } from './entities/project.entity';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';

@Resolver((of) => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], {name: 'todos'})
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.fetchAll()
  }

  @Mutation(() => Todo)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.store(createTodoInput);
  }

  @Query(() => Todo, { name: 'todo' , nullable: true})
  findOne(@Args('todoId', { type: () => String }) todoId: string) {
    return this.todoService.fetchOneById(todoId);
  }

  @Mutation(() => Todo)
  updateTodo(@Args('updateTodo') updateTodoInput: UpdateTodoInput) {
    return this.todoService.update(updateTodoInput._id, updateTodoInput);
  }

  @Mutation(() => Todo)
  removeTodo(@Args('todoId', { type: () => String }) todoId: string) {
    return this.todoService.delete(todoId);
  }

  @ResolveField((of) => Project)
  project(@Parent() todo: Todo): any {
    return {__typename: 'Project', _id: todo.project_id};
  }

  @ResolveField((of) => Label)
  labels(@Parent() todo: Todo): any {
    console.log(todo);
    return todo.label_id.map((todoId) => ({__typename: 'Label', _id: todoId}));
  }
}
