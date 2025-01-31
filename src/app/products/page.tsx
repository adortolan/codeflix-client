import { getProducts } from '../lib/settings/Settings';

const Products = async () => {
  const product: { name: string; description: string; price: number } =
    await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <h1>Name: {product.name}</h1>
      <h1>Description: {product.description}</h1>
      <h1>Price: {product.price}</h1>
    </div>
  );
};

export default Products;
