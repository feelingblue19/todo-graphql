import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphqlModule } from './graphql.module';
import { MongoModule } from './mongo.module';

@Module({
  imports: [GraphqlModule, MongoModule, ConfigModule],
  exports: [GraphqlModule, MongoModule, ConfigModule],
})
export class CommonModule {}