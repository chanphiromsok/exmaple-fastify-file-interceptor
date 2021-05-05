"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastifyFilesInterceptor = void 0;
const common_1 = require("@nestjs/common");
const fastify_multer_1 = require("fastify-multer");
function FastifyFilesInterceptor(fieldName, maxCount, localOptions) {
    let MixinInterceptor = class MixinInterceptor {
        constructor(options) {
            this.multer = fastify_multer_1.default(Object.assign(Object.assign({}, options), localOptions));
        }
        intercept(context, next) {
            return __awaiter(this, void 0, void 0, function* () {
                const ctx = context.switchToHttp();
                yield new Promise((resolve, reject) => this.multer.array(fieldName, maxCount)(ctx.getRequest(), ctx.getResponse(), (error) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve();
                }));
                return next.handle();
            });
        }
    };
    MixinInterceptor = __decorate([
        __param(0, common_1.Optional()),
        __param(0, common_1.Inject('MULTER_MODULE_OPTIONS')),
        __metadata("design:paramtypes", [Object])
    ], MixinInterceptor);
    const Interceptor = common_1.mixin(MixinInterceptor);
    return Interceptor;
}
exports.FastifyFilesInterceptor = FastifyFilesInterceptor;
//# sourceMappingURL=fastify-files-interceptor.js.map