import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { HabitsModule } from './habits/habits.module';
import { EventsModule } from './events/events.module';
import { UploadModule } from './upload/upload.module';
import { createComplexityRule, simpleEstimator } from 'graphql-query-complexity';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }), // ← ПЕРВЫМ
        CacheModule.register({ ttl: 5000, max: 10, isGlobal: true }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            playground: true,
            sortSchema: true,
            validationRules: [
                createComplexityRule({
                    estimators: [simpleEstimator({ defaultComplexity: 1 })],
                    maximumComplexity: 500,
                    onComplete: (complexity) => {
                        console.log(`Query complexity: ${complexity}`);
                    },
                }),
            ],
        }),
        HabitsModule,
        EventsModule,
        UploadModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}