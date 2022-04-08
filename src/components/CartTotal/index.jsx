import "./styles.css"

const CartTotal = ({
  currentValue,
  setCurrentValue,
  setTotalValue,
  totalValue,
}) => {
  setTotalValue(currentValue.reduce((acc, item) => acc + item.price, 0))

  return currentValue.length !== 0 ? (
    <div className="cartTotalContent">
      <div className="cartTotal--span">
        <span className="spanTotal"> Total</span>
        <span className="spanTotalPrice">
          {totalValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button className="buttonTotalPrice" onClick={() => setCurrentValue([])}>
        Remover todos
      </button>
    </div>
  ) : (
    null
  )
}

export default CartTotal