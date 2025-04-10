import { useState } from 'react';

import { RegisterSuccessMsg } from '@/components/register-success-msg';
import { RegisterForm } from '@/components/register-form';
import { LoginLink } from '@/components/login-link';

const RegistrationPage = () => {
  const [success, setSuccess] = useState(false);

  return (
    <div className='h-screen w-screen flex flex-col justify-start items-center p-6 bg-form-back'>
      <div className='flex flex-col justify-start items-center gap-8 bg-slate-50 p-8 min-w-96 min-h-96 rounded-lg max-w-4xl mt-10'>
        {success ? (
          <RegisterSuccessMsg />
        ) : (
          <>
            <RegisterForm setSuccess={setSuccess} />
            <LoginLink />
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;
