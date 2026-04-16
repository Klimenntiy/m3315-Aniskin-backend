import { S3Service } from '../s3/s3.service';
export declare class UploadController {
    private readonly s3Service;
    constructor(s3Service: S3Service);
    uploadHabitImage(file: Express.Multer.File, habitId: number): Promise<{
        success: boolean;
        message: string;
        url?: undefined;
        key?: undefined;
    } | {
        success: boolean;
        url: string;
        key: string;
        message?: undefined;
    }>;
}
