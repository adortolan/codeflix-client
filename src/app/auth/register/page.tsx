'use client';
import AuthForm from '@/app/components/AuthForm';

const Register = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Register form submitted');
    e.preventDefault();
  };

  return <AuthForm formType='register' onSubmit={handleSubmit} />;
};

export default Register;
