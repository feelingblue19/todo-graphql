import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './entities/project.entity';
import { Model } from 'mongoose';
import { CreateProjectInput } from './dto/create-project.input';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
  ) {}

  async store(createProjectInput: CreateProjectInput) {
    const project = new this.projectModel(createProjectInput);
    return project.save();
  }

  async fetchAll() {
    return this.projectModel.find().exec();
  }

  async fetchOneById(id: string) {
    const project = await this.projectModel.findOne({ _id: id }).exec();

    if (!project) {
      throw new NotFoundException(`Project ${id} not found`);
    }

    return project;
  }
}
