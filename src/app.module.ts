import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { HabitsModule } from './habits/habits.module';
import { EventsModule } from './events/events.module';
import { createComplexityRule, simpleEstimator } from 'graphql-query-complexity';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            playground: true,
            sortSchema: true,
            validationRules: [
                createComplexityRule({
                    estimators: [
                        simpleEstimator({ defaultComplexity: 1 }),
                    ],
                    maximumComplexity: 500,
                    onComplete: (complexity) => {
                        console.log(`Query complexity: ${complexity}`);
                    },
                }),
            ],
        }),
        HabitsModule,
        EventsModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}