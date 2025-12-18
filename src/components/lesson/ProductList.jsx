const ProductList = ({ products }) => {
  return (
    <div className="products">
      <p className="products-title">Список продуктів:</p>

      {products.length === 0 ? (
        <p className="products-empty">Товарів немає</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index} className="product-item">
              {product}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
