function Product({ id, name, category, price, handleClick }) {
  return (
    <div id={id} className="product">
      <h3>{name}</h3>
      <p>{category}</p>
      <p>R$ {price}</p>
      <button onClick={() => handleClick(id)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default Product;
