import { Module } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelResolver } from './label.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Label, LabelSchema } from './enitities/label.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Label.name,
        schema: LabelSchema
      }
    ])
  ],
  providers: [LabelResolver, LabelService]
})
export class LabelModule {}
