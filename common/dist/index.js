"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogBody = exports.blogBody = exports.signinBody = exports.signupBody = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupBody = zod_1.default.object({
    email: zod_1.default.string().email(),
    name: zod_1.default.string().optional(),
    password: zod_1.default.string().min(6),
});
exports.signinBody = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.blogBody = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    published: zod_1.default.boolean().optional(),
});
exports.updateBlogBody = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string().optional(),
    published: zod_1.default.boolean().optional(),
});
