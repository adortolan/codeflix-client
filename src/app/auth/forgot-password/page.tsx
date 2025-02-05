'use client';

import { InputField } from '@/app/components/InputField';
const ForgotPassword = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-6 py-8 shadow-lg'
    >
      <div className='flex w-full flex-col items-center justify-center space-y-4'>
        <h1 className='text-3xl font-bold'>Forgot Password</h1>
        <p className='text-sm font-light text-gray-400'>
          Enter your email to reset your password
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          id='email'
          type='email'
          label='Email'
          placeholder='Enter your email'
        />
      </div>
      <button
        type='submit'
        className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-red-600 px-5 py-1.5 text-sm font-semibold text-white transition hover:opacity-75 md:px-8 md:py-2.5'
      >
        Reset Password
      </button>
    </form>
  );
};

export default ForgotPassword;
