import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name)
        private readonly TodoModel: Model<Todo>
    ) {}

    async fetchAll(): Promise<Todo[]> {
        return this.TodoModel.find().exec();
    }

    async fetchOneById(id: string): Promise<Todo> {
        const todo = this.TodoModel.findOne({_id: id}).exec();

        return todo
    }

    async store(createTodoInput: CreateTodoInput): Promise<Todo> {
        const todo = new this.TodoModel();
        todo.title = createTodoInput.title;
        todo.project_id = createTodoInput.project_id;
        todo.description = createTodoInput.description;
        todo.label_id = createTodoInput.label_id.map(label => label.id)

        return todo.save();
    }

    async update(id: string, updateTodoInput: UpdateTodoInput): Promise<Todo> {
        const todo = await this.TodoModel.findOneAndUpdate({ _id: id }, { $set: updateTodoInput }, { new: true }).exec();
  
        if (!todo) {
            throw new NotFoundException(`Todo ${id} not found`);
        }

        return todo;
    }

    async delete(id: string) {
        const todo = await this.TodoModel.findOne({_id: id});

        return todo.remove();
    }

    async fetchByProjectId(projectId: string): Promise<Todo[]> {
        const todos = this.TodoModel.find({project_id: projectId}).exec()

        return todos;
    }

    async fetchByLabelId(labelId: string): Promise<Todo[]> {
        const todos = this.TodoModel.find({label_id: {$in: [labelId]}}).exec()

        return todos;
    }
}
