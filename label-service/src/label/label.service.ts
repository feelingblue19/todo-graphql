import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLabelInput } from './dto/create-label.input';
import { Label } from './enitities/label.entity';

@Injectable()
export class LabelService {
    constructor(
        @InjectModel(Label.name)
        private readonly labelModel: Model<Label>,
      ) {}
    
      async store(createLabelInput: CreateLabelInput) {
        const label = new this.labelModel(createLabelInput);
        return label.save();
      }
    
      async fetchAll() {
        return this.labelModel.find().exec();
      }
    
      async fetchOneById(id: string) {
        const label = await this.labelModel.findOne({ _id: id }).exec();
    
        if (!label) {
          throw new NotFoundException(`Label ${id} not found`);
        }
    
        return label;
      }
}
