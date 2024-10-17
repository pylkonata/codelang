import { z } from 'zod';

export const RegisterSchema = z
  .object({
    username: z.string().min(4, 'Name should be at least 4 characters'),
    password: z
      .string()
      .min(5, { message: 'Password is too short' })
      .max(20, { message: 'Password is too long' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type FormFields = z.infer<typeof RegisterSchema>;

export enum ValidFieldNames {
  UserName = 'username',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

export enum LabelValues {
  UserName = 'User name',
  Password = 'Password',
  ConfirmPassword = 'Confirm password',
}
