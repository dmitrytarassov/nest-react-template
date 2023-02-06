"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadingUtils = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
class FileUploadingUtils {
    static singleFileUploader(name, dest = './uploads/images') {
        return (0, platform_express_1.FileInterceptor)(name, {
            storage: (0, multer_1.diskStorage)({
                destination: dest,
                filename: (req, file, cb) => {
                    const randomName = Array(32)
                        .fill(null)
                        .map(() => Math.round(Math.random() * 16).toString(16))
                        .join('');
                    return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
                },
            }),
        });
    }
    static multipleFileUploader(name, dest = './uploads/images', maxFileNumber = 20) {
        return (0, platform_express_1.FilesInterceptor)(name, maxFileNumber, {
            storage: (0, multer_1.diskStorage)({
                destination: dest,
                filename: (req, file, cb) => {
                    const randomName = Array(32)
                        .fill(null)
                        .map(() => Math.round(Math.random() * 16).toString(16))
                        .join('');
                    return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
                },
            }),
        });
    }
}
exports.FileUploadingUtils = FileUploadingUtils;
//# sourceMappingURL=fileUploadingUtils.js.map