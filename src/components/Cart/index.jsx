import "./styles.css"
import CartProduct from "../CartProduct"

const Cart = ({ currentValue, setCurrentValue }) => {
  const removeItem = (removingProducts) => {
    setCurrentValue(
      currentValue.filter((product) => product !== removingProducts)
    )
  }
  return (
    <>
      <div className="apresentacaoCarrinho">
        <span> Carrinho de compras </span>
      </div>

      <div className="carrinhoProdutos">
        {currentValue.length === 0 ? (
          <>
            <p className="sacolaVazia"> Sua sacola está vazia</p>
            <span className="adicioneItens"> Adicione itens</span>
          </>
        ) : (
          currentValue.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              removeItem={removeItem}
            />
          ))
        )}
      </div>
    </>
  )
}

export default Cart