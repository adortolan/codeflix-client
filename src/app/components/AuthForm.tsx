'use client';

import { InputField } from './InputField';

type AuthFormProps = {
  formType: 'login' | 'register';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-6 py-8 shadow-lg'
    >
      <div className='flex w-full flex-col items-center justify-center space-y-4'>
        <h1 className='text-3xl font-bold'>
          {formType === 'login' ? 'Login' : 'Registrar'}
        </h1>
        <p className='text-sm font-light text-gray-400'>
          {formType === 'login'
            ? 'Sign in to your account'
            : 'Create a new account'}
        </p>
        <p className='text-sm font-light text-gray-400'>
          New to Codeflix?{' '}
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

        {formType === 'register' && (
          <InputField
            id='confirmPassword'
            type='password'
            label='Confirm Password'
            placeholder='Confirm your password'
          />
        )}
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-y-0'>
        <button
          type='submit'
          className='w-full rounded bg-[#e50914] py-2 font-semibold text-black hover:bg-[#f6121d]'
        >
          {formType === 'login' ? 'Login' : 'Registrar'}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
