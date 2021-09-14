import Product from "./Product";
import { useState } from "react";

function MenuContainer({
  products,
  handleClick,
  filteredProducts,
  setFilteredProducts,
  showCart,
  showProducts,
  isFiltered,
}) {
  const [filterInput, setFilterInput] = useState("");

  return (
    <div className="container">
      <h2>Produtos</h2>
      <button className="cartButton" onClick={() => showCart()}>
        Meu Carrinho
      </button>
      <form action="">
        <input
          type="text"
          value={filterInput}
          onChange={(event) => setFilterInput(event.target.value)}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            showProducts(filterInput);
          }}
        >
          Procurar
        </button>
      </form>
      {filteredProducts.map((product) => (
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
