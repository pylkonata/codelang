import { Link } from 'react-router-dom';

const LoginLink = () => {
  return (
    <div className='flex items-center gap-2'>
      <span>Already have an account?</span>
      <Link to={'/login'} className='underline text-red-700 hover:text-red-500'>
        Login
      </Link>
    </div>
  );
};

export default LoginLink;
