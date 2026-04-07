import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3Service {
    private s3Client: S3Client;
    private bucket: string;

    constructor(private configService: ConfigService) {
        const region = this.configService.get<string>('YC_REGION');
        const endpoint = this.configService.get<string>('YC_ENDPOINT');
        const accessKeyId = this.configService.get<string>('YC_ACCESS_KEY_ID');
        const secretAccessKey = this.configService.get<string>('YC_SECRET_ACCESS_KEY');
        const bucket = this.configService.get<string>('YC_BUCKET');

        if (!region || !endpoint || !accessKeyId || !secretAccessKey || !bucket) {
            throw new Error('Missing S3 configuration in .env file');
        }

        this.s3Client = new S3Client({
            region: region,
            endpoint: endpoint,
            credentials: {
                accessKeyId: accessKeyId,
                secretAccessKey: secretAccessKey,
            },
        });
        this.bucket = bucket;
    }

    async uploadFile(file: Express.Multer.File, key: string): Promise<string> {
        const command = new PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: file.buffer,
            ContentType: file.mimetype,
        });

        await this.s3Client.send(command);
        return `https://storage.yandexcloud.net/${this.bucket}/${key}`;
    }

    async deleteFile(key: string): Promise<void> {
        const command = new DeleteObjectCommand({
            Bucket: this.bucket,
            Key: key,
        });
        await this.s3Client.send(command);
    }
}