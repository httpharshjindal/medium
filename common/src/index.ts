import z from "zod";

export const signupBody = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(6),
});

export const signinBody = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const blogBody = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional(),
});

export const updateBlogBody = z.object({
  title: z.string(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});

export type SignupBody = z.infer<typeof signupBody>
export type SigninBody = z.infer< typeof signinBody>
export type BlogBody = z.infer<typeof blogBody>
export type UpdateBlogBody = z.infer<typeof updateBlogBody>


