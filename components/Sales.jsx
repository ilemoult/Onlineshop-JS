import ProductInterface from './ProductInterface';

export default function Sales({ products }) {
  return (
    <section className="image-section">
      <div className="products-headline">Sales</div>
      <div className="products-images">
        {products.filter((searchfor) => searchfor.sale == true).map(({ id, title, image, price }) => (
          <ProductInterface
            key={id}
            title={title}
            image={image}
            price={price}
            alt={title}
          />
        ))}
      </div>
    </section>
  );
};