import { Module } from '@nestjs/common';
import { MongoModule } from './mongo.module';
import { GraphqlModule } from './graphql.module';
import { ConfigModule } from './config.module';

@Module({
  imports: [MongoModule, GraphqlModule, ConfigModule],
  exports: [MongoModule, GraphqlModule, ConfigModule]
})
export class CommonModule {}
