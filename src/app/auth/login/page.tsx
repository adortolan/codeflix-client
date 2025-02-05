'use client';

import AuthForm from '@/app/components/AuthForm';

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Login form submitted');
    e.preventDefault();
  };

  return (
    <>
      <AuthForm formType='login' onSubmit={handleSubmit} />
    </>
  );
};

export default Login;
