export async function getSettings(): Promise<{ name: string; email: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        email: '6Qx8F@example.com',
      });
    }, 2000);
  });
}

export async function getProducts(): Promise<{
  name: string;
  description: string;
  price: number;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 19.99,
      });
    }, 2000);
  });
}

export async function getTodos(id: string) {
  const todos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return todos.json();
}
