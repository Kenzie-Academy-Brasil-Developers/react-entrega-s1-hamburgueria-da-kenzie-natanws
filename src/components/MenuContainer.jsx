import Product from "./Product";

function MenuContainer({ products, handleClick }) {
  return (
    <div>
      {products.map((product) => (
        <Product
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default MenuContainer;
