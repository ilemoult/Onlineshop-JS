import Layout from '../components/Layout';
import Sales from '../components/Sales';
import products from '../js/products';

export default function sales() {
  return (
    <Layout title="Sale">
      <Sales products={products} />
    </Layout>
  );
};
