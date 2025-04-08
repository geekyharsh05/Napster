import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

export type AuthInput = z.infer<typeof userSchema>;