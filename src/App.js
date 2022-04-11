import './reset.css'
import { useEffect, useState } from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import CartTotal from "./components/CartTotal"
import { ToastContainer, toast, Bounce } from 'react-toastify'

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentValue, setCurrentValue] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
  }, [])

  const showProducts = (valorInputs) => {
    const productFiltered = products.filter((product) => {
      return product.name.toLowerCase().trim().includes(valorInputs) ||
             product.category.toLowerCase().trim().includes(valorInputs)
    })
    setFilteredProducts(productFiltered)
  }

  const handleClick = (productID) => {
    const productFound = products.find(
      (product) => product.id === productID
    )
    const productsFiltered = currentValue.filter(
      (product) => product.id === productID
    )
        if (!productsFiltered.includes(productFound)) {
          setCurrentValue([...currentValue, productFound])
        }
  }

  return (
    <div className="App">
      <Header
        inputValue={inputValue}
        showProducts={showProducts}
        setInputValue={setInputValue}
      />
      <main>
        <div className="cardPanel">
          <ProductList
            products={products}
            handleClick={handleClick}
            filteredProducts={filteredProducts}
          />
        </div>

        <aside>
          <div className = "encapsulateCart">
            <Cart currentValue={currentValue} setCurrentValue={setCurrentValue} />
            <CartTotal
              currentValue={currentValue}
              setCurrentValue={setCurrentValue}
              setTotalValue={setTotalValue}
              totalValue={totalValue}
            />
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
