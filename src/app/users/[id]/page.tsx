import { getTodos } from '@/app/lib/settings/Settings';

const Todos = async ({ params }: { params: { id: string } }) => {
  const todos = await getTodos(params.id);

  return (
    <div>
      <h1>Todo: {params.id}</h1>
      <h1>User id: {todos?.userId}</h1>
      <h1>Title: {todos?.title}</h1>
      <h1>Completed: {todos?.completed}</h1>
    </div>
  );
};

export default Todos;
