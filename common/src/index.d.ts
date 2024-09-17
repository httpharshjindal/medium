import z from "zod";
export declare const signupBody: z.ZodObject<{
    username: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    name?: string | undefined;
}, {
    username: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinBody: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const blogBody: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    published?: boolean | undefined;
}, {
    title: string;
    content: string;
    published?: boolean | undefined;
}>;
export declare const updateBlogBody: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
    published?: string | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
    published?: string | undefined;
}>;
export type SignupBody = z.infer<typeof signupBody>;
export type SigninBody = z.infer<typeof signinBody>;
export type BlogBody = z.infer<typeof blogBody>;
export type UpdateBlogBody = z.infer<typeof updateBlogBody>;
