import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import { useForm } from 'react-hook-form';

import { FormField } from '@/components/form-field';

import {
  FormFields,
  LabelValues,
  RegisterSchema,
  ValidFieldNames,
} from '@/components/register-form/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { handleRegisterError } from './register-error-handling';

interface RegisterFormProps {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const env = import.meta.env;

const RegisterForm = ({ setSuccess }: RegisterFormProps) => {
  const [errorMsg, setErrMsg] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    trigger,
    getFieldState,
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });
  const password = watch('password');

  // Revalidate confirmPassword when password changes
  useEffect(() => {
    const isTouched = getFieldState('confirmPassword').isTouched;
    if (!isTouched) return;
    trigger('confirmPassword');
  }, [password, trigger]);

  // Reset error message when form is changed
  useEffect(() => {
    const { unsubscribe } = watch(() => {
      setErrMsg('');
    });
    return () => unsubscribe();
  }, [watch]);

  const handleRegistration = async (data: FormFields) => {
    try {
      await axios.post(
        env.VITE_REGISTER_URL,
        {
          username: data.username,
          password: data.password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setSuccess(true);
      reset();
    } catch (err) {
      handleRegisterError(err, setErrMsg);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration)} className='flex flex-col gap-8 w-full h-full'>
      <h1 className='text-3xl text-center font-mono font-bold text-secondary'>{`</> Codelang`}</h1>
      {errorMsg && (
        <p className='text-red-500' role='alert'>
          {errorMsg}
        </p>
      )}

      <FormField
        label={LabelValues.UserName}
        name={ValidFieldNames.UserName}
        register={register}
        error={errors.username}
      />
      <FormField
        label={LabelValues.Password}
        name={ValidFieldNames.Password}
        register={register}
        error={errors.password}
        type='password'
      />
      <FormField
        label={LabelValues.ConfirmPassword}
        name={ValidFieldNames.ConfirmPassword}
        register={register}
        error={errors.confirmPassword}
        type='password'
      />
      <button
        type='submit'
        className='bg-secondary text-white rounded-lg px-8 py-2 hover:bg-blue-800 text-lg transition-colors disabled:bg-slate-300'
        disabled={!isValid || isSubmitting}
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
