import z from "zod";
export declare const signupBody: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinBody: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
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
    title: z.ZodString;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content?: string | undefined;
    published?: boolean | undefined;
}, {
    title: string;
    content?: string | undefined;
    published?: boolean | undefined;
}>;
export type SignupBody = z.infer<typeof signupBody>;
export type SigninBody = z.infer<typeof signinBody>;
export type BlogBody = z.infer<typeof blogBody>;
export type UpdateBlogBody = z.infer<typeof updateBlogBody>;
