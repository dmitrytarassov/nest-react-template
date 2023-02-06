"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64ToFileInspector = void 0;
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");
function decodeBase64Image(dataString) {
    const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (matches.length !== 3) {
        throw new Error('Invalid input string');
    }
    const response = {
        type: matches[1],
        data: new Buffer(matches[2], 'base64'),
    };
    return response;
}
async function uploadFile(fileBase64, pathName) {
    const imageTypeRegularExpression = /\/(.*?)$/;
    const seed = crypto.randomBytes(20);
    const uniqueSHA1String = crypto.createHash('sha1').update(seed).digest('hex');
    const uniqueRandomImageName = 'image-' + uniqueSHA1String;
    const file = decodeBase64Image(fileBase64);
    const imageTypeDetected = file.type.match(imageTypeRegularExpression);
    const userUploadedImagePath = path.join(pathName, `${uniqueRandomImageName}.${imageTypeDetected[1]}`);
    await fs.writeFileSync(userUploadedImagePath, file.data);
    return `${uniqueRandomImageName}.${imageTypeDetected[1]}`;
}
function Base64ToFileInspector(pathName) {
    return class _CustomInspector {
        async intercept(context, next) {
            const ctx = context.switchToHttp();
            const req = ctx.getRequest();
            const keys = Object.keys(req.body);
            for (const key of keys) {
                try {
                    if (Array.isArray(req.body[key])) {
                        const data = [];
                        for (const el of req.body[key]) {
                            if (typeof el === 'string' && el.startsWith('data:')) {
                                try {
                                    const file = await uploadFile(el, pathName);
                                    data.push(file);
                                }
                                catch (e) {
                                }
                            }
                            else if (typeof el === 'string') {
                                data.push(el);
                            }
                        }
                        req.body[key] = data;
                    }
                    else {
                        const el = req.body[key];
                        if (typeof el === 'string' && el.startsWith('data:')) {
                            try {
                                const file = await uploadFile(el, pathName);
                                req.body[key] = file;
                            }
                            catch (e) {
                            }
                        }
                        else if (typeof el === 'string') {
                            req.body[key] = el;
                        }
                    }
                }
                catch (e) {
                    console.error(e);
                }
            }
            return next.handle();
        }
    };
}
exports.Base64ToFileInspector = Base64ToFileInspector;
//# sourceMappingURL=Base64ToFileInspector.js.map