import * as z from "zod";

export const InputSchema = z.object({
  name: z.string().min(5).max(130),
  email: z.string().email().min(6).max(100),
  password: z.string().min(6),
});

export const LoginInputSchema = InputSchema.omit({ name: true });
