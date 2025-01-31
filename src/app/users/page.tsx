import { getSettings } from '../lib/settings/Settings';

const User = async () => {
  const result: { name: string; email: string } = await getSettings();

  console.log('Async', result);

  return (
    <div className='p-4 text-3xl font-bold'>
      <h1>User: {result?.name}</h1>
      <h1>Email: {result?.email}</h1>
    </div>
  );
};

export default User;
