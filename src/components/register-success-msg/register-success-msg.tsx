import { Link } from 'react-router-dom';

const RegisterSuccessMsg = () => {
  return (
    <section className='flex flex-col justify-start items-center gap-4'>
      <h1 className='text-3xl text-secondary'>Success!</h1>
      <Link to='/login' className='underline text-red-700 hover:text-red-500'>
        Login
      </Link>
    </section>
  );
};

export default RegisterSuccessMsg;
