function Carrinho({ currentSale, cartTotal, setCartTotal, sumCartTotal }) {
  return (
    <div className="cartContainer hidden">
      <h3 className="cartTitle">Seu Carrinho</h3>
      {currentSale.map((sale) => (
        <div className="cartProductContainer">
          <span className="SpanTitle">{sale.name}</span>
          <span className="SpanPrice">R$ {sale.price}</span>
        </div>
      ))}
      <h3 className="cartTotal">R$ {sumCartTotal}</h3>
    </div>
  );
}

export default Carrinho;
