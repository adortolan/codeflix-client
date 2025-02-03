'use client';

import { InputField } from './InputField';

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Login form submitted');
    e.preventDefault();
  };
  return (
    <div
      style={{ backgroundImage: 'url(/background.jpg)' }}
      className='flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat text-white'
    >
      <form
        onSubmit={handleSubmit}
        className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-6 py-8 shadow-lg'
      >
        <div className='flex w-full flex-col items-center justify-center space-y-4'>
          <h1 className='text-3xl font-bold'>Login</h1>
          <p className='text-sm font-light text-gray-400'>
            Sign in to your account
          </p>
          <p className='text-sm font-light text-gray-400'>
            New to Netflix?{' '}
            <a href='#' className='text-white hover:underline'>
              Sign up now
            </a>
          </p>
        </div>

        <div className='mt-8 flex flex-col space-y-4'>
          <InputField
            id='email'
            type='email'
            label='Email'
            placeholder='Enter your email'
          />

          <InputField
            id='password'
            type='password'
            label='Password'
            placeholder='Enter your password'
          />
        </div>

        <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-y-0'>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            type='submit'
            className='w-full rounded bg-[#e50914] px-4 py-2 text-white'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
