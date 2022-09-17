import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { MongooseModule } from '@nestjs/mongoose'
import { Todo, TodoSchema } from './entities/todo.entity'
import { ProjectResolver } from './project.resolver';
import { LabelResolver } from './label.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodoSchema
      },
    ])
  ],
  providers: [TodoResolver, ProjectResolver, LabelResolver, TodoService]
})
export class TodoModule {}
