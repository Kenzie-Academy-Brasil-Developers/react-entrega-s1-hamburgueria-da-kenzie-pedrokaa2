import { useState } from "react"
import "./styles.css"
import BurguerKenzie from "../Img/BurguerKenzie.png"

const Header = ({ showProducts }) => {
  const [valorInput, setValorInput] = useState("")
  return (
    <div className="contentHeader">
      <img className="imgHeader" src={BurguerKenzie} alt="BurguerKenzie" />
      <form onSubmit={(event => {
        event.preventDefault()
        showProducts(valorInput.toLowerCase())
      })} 
      className="formHeader">
        <input
          className="inputHeader"
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setValorInput(event.target.value)}
        >         
        </input>
        <button className="buttonHeader">Pesquisar</button>
      </form>
    </div>
  )
}

export default Header