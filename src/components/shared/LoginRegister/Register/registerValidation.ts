import { z } from "zod";

const passwordValidation = z.string()
  .min(6, "Password must be at least 6 characters");
  // Uncomment for stricter password requirements:
  // .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  // .regex(/[a-z]/, "Must contain at least one lowercase letter")
  // .regex(/[0-9]/, "Must contain at least one number")
  // .regex(/[^A-Za-z0-9]/, "Must contain at least one special character");


export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["landlord", "tenant", "user"]),
  password: passwordValidation,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});