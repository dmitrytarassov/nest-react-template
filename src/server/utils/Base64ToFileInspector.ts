import { NestInterceptor } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common/interfaces/features/execution-context.interface';
import * as path from 'path';
import * as crypto from 'crypto';
import * as fs from 'fs';

function decodeBase64Image(dataString) {
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (matches.length !== 3) {
    throw new Error('Invalid input string');
  }

  const response: { type: string; data: Buffer } = {
    type: matches[1],
    data: new Buffer(matches[2], 'base64'),
  };

  return response;
}

async function uploadFile(
  fileBase64: string,
  pathName: string,
): Promise<string> {
  const imageTypeRegularExpression = /\/(.*?)$/;
  const seed = crypto.randomBytes(20);
  const uniqueSHA1String = crypto.createHash('sha1').update(seed).digest('hex');

  const uniqueRandomImageName = 'image-' + uniqueSHA1String;

  const file = decodeBase64Image(fileBase64);

  const imageTypeDetected = file.type.match(imageTypeRegularExpression);

  const userUploadedImagePath = path.join(
    pathName,
    `${uniqueRandomImageName}.${imageTypeDetected[1]}`,
  );

  await fs.writeFileSync(userUploadedImagePath, file.data);

  return `${uniqueRandomImageName}.${imageTypeDetected[1]}`;
}

export function Base64ToFileInspector(pathName) {
  return class _CustomInspector implements NestInterceptor {
    async intercept(context: ExecutionContext, next) {
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
                } catch (e) {
                  // do nothing
                }
              } else if (typeof el === 'string') {
                data.push(el);
              }
            }
            req.body[key] = data;
          } else {
            const el = req.body[key];

            if (typeof el === 'string' && el.startsWith('data:')) {
              try {
                const file = await uploadFile(el, pathName);
                req.body[key] = file;
              } catch (e) {
                // do nothing
              }
            } else if (typeof el === 'string') {
              req.body[key] = el;
            }
          }
        } catch (e) {
          console.error(e);
          // do nothing
        }
      }

      return next.handle();
    }
  };
}
