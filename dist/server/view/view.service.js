"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewService = void 0;
const common_1 = require("@nestjs/common");
const next_1 = require("next");
let ViewService = class ViewService {
    async onModuleInit() {
        try {
            this.server = (0, next_1.default)({
                dev: process.env.NODE_ENV !== 'production',
                dir: process.env.NODE_ENV !== 'production' ? 'src/client' : '',
            });
            await this.server.prepare();
        }
        catch (error) {
            console.error(error);
        }
    }
    handler(req, res) {
        return this.server.getRequestHandler()(req, res);
    }
};
ViewService = __decorate([
    (0, common_1.Injectable)()
], ViewService);
exports.ViewService = ViewService;
//# sourceMappingURL=view.service.js.map