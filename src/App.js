import "./App.css";
import "./components/styles.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Carrinho from "./components/Carrinho";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([...products]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (filtered) => {
    if (filtered !== "") {
      setFilteredProducts(
        products.filter(
          (product) => {
            if (filtered === product.name) {
              console.log(filteredProducts);
              return product;
            } else if (filtered === product.category) {
              console.log(filteredProducts);
              return product;
            }
          }

          //   filtered === product.name
          //     ? product
          //     : filtered === product.category
          //     ? product
          //     : (isFiltered = false)
        )
      );
    } else {
      setFilteredProducts([...products]);
    }
  };

  const showCart = () => {
    const cart = document.querySelector(".cartContainer");
    cart.classList.remove("hidden");
    cart.classList.toggle("showCart");
  };

  const sumCartTotal = currentSale
    .reduce((acc, curr) => {
      return acc + curr.price;
    }, 0)
    .toFixed(2);

  const handleClick = (productId) => {
    return !currentSale.find((sale) => sale.id === productId)
      ? setCurrentSale([
          ...currentSale,
          products.find((product) => product.id === productId),
        ])
      : null;
  };
  return (
    <div className="container">
      <Carrinho
        currentSale={currentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        sumCartTotal={sumCartTotal}
      />

      <MenuContainer
        products={products}
        handleClick={handleClick}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        showCart={showCart}
        showProducts={showProducts}
      />
    </div>
  );
}

export default App;
