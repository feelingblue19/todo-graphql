import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabelResolver } from './label/label.resolver';
import { CommonModule } from './common/common.module';
import { LabelModule } from './label/label.module';

@Module({
  imports: [CommonModule, LabelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
