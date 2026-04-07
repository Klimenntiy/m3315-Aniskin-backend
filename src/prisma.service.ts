import { config } from 'dotenv';
config();

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        console.log('DATABASE_URL:', process.env.DATABASE_URL);

        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL is not defined!');
        }

        const pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });

        const adapter = new PrismaPg(pool);

        super({
            adapter,
            log: ['error', 'warn'],
        } as any);
    }

    async onModuleInit() {
        await this.$connect();
        console.log('Prisma connected to DB');
    }

    async onModuleDestroy() {
        await this.$disconnect();
        console.log('Prisma disconnected');
    }
}