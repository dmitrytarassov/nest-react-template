"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./server/app/app.module");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const mongoConfig_1 = require("./server/utils/mongoConfig");
const MongoStore = require('connect-mongo');
require('dotenv').config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'nlnbjbde833qhn',
        store: MongoStore.create({
            mongoUrl: mongoConfig_1.default.uri,
        }),
    }));
    app.useStaticAssets(path.join(__dirname, '..', 'public'), {
        index: false,
        prefix: '/public',
    });
    app.use(bodyParser.json({ limit: '5mb' }));
    app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
    await app.listen(process.env.PORT || 8080);
    const server = app.getHttpServer();
    const router = server._events.request._router;
    const availableRoutes = router.stack
        .map((layer) => {
        if (layer.route) {
            return {
                route: {
                    path: layer.route.path,
                    method: layer.route.stack[0].method,
                },
            };
        }
    })
        .filter((item) => item !== undefined);
    console.log(availableRoutes);
}
bootstrap();
//# sourceMappingURL=main.js.map