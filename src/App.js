import "./App.css";
import "./components/styles.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";

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

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = () => {
    return 1;
  };
  // "esta função irá filtrar os produtos e apenas mostrar produtos com o mesmot exto escrito no input";
  const handleClick = (productId) => {
    setCurrentSale([
      ...currentSale,
      products.find((product) => product.id === productId),
    ]);
    console.log(currentSale);
  };

  return (
    <div className="container">
      <div>
        {currentSale.map((sale) => (
          <p>{sale.name}</p>
        ))}
      </div>
      <MenuContainer products={products} handleClick={handleClick} />
    </div>
  );
}

export default App;
