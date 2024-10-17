import { ReactElement, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { FormFields, ValidFieldNames } from '../register-form/types';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormFields>;
  error: FieldError | undefined;
}

const FormField = ({
  label,
  placeholder,
  name,
  type = 'text',
  register,
  error,
  ...props
}: FormFieldProps) => {
  const [isShownPassword, setIsShownPassword] = useState(false);

  const handleShowPassword = () => {
    setIsShownPassword((prev) => !prev);
  };

  return (
    <div className='relative w-full flex flex-col font-serif font-medium '>
      <label className='text-lg px-1 text-form-text' htmlFor={name}>
        {label}
      </label>
      <div className='relative'>
        <input
          type={isShownPassword ? 'text' : type}
          className='w-full min-h-10 pl-4 pr-10 first-letter:py-1 rounded-lg border border-gray-300'
          placeholder={placeholder}
          id={name}
          {...register(name)}
          {...props}
        />
        {type === 'password' && (
          <EyeIcon
            isShownPassword={isShownPassword}
            handleShowPassword={handleShowPassword}
            className='absolute w-6 h-8 right-2 top-1/2 -translate-y-1/2 cursor-pointer text-secondary hover:text-blue-800 transition-colors'
          />
        )}
        {error && <p className='text-sm text-red-700 px-1 absolute mt-1'>{error?.message}</p>}
      </div>
    </div>
  );
};

export default FormField;

interface SvgIconProps {
  isShownPassword: boolean;
  handleShowPassword: () => void;
  className: string;
  color?: string;
}

const EyeIcon = ({
  isShownPassword,
  handleShowPassword,
  className,
  color,
  ...props
}: SvgIconProps): ReactElement<SVGElement> => {
  return isShownPassword ? (
    <IoMdEye className={className} onClick={handleShowPassword} color={color} {...props} />
  ) : (
    <IoMdEyeOff className={className} onClick={handleShowPassword} color={color} {...props} />
  );
};
