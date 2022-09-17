import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Label } from 'src/todo/entities/label.entity';
import { Project } from 'src/todo/entities/project.entity';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloFederationDriverConfig>({
            driver: ApolloFederationDriver,
            autoSchemaFile: './schema.gql',
            buildSchemaOptions: {
                orphanedTypes: [Project, Label]
            }
        }),
    ]
})
export class GraphqlModule {}
