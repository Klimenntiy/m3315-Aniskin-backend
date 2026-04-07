import { Controller, Post, UseInterceptors, UploadedFile, Body, ParseIntPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from '../s3/s3.service';

@Controller('upload')
export class UploadController {
    constructor(private readonly s3Service: S3Service) {}

    @Post('habit-image')
    @UseInterceptors(FileInterceptor('file'))
    async uploadHabitImage(
        @UploadedFile() file: Express.Multer.File,
        @Body('habitId', ParseIntPipe) habitId: number,
    ) {
        if (!file) {
            return { success: false, message: 'Файл не загружен' };
        }

        const key = `habits/${habitId}/${Date.now()}-${file.originalname}`;
        const imageUrl = await this.s3Service.uploadFile(file, key);
        
        return {
            success: true,
            url: imageUrl,
            key: key,
        };
    }
}
