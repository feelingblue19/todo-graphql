import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ProjectModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
