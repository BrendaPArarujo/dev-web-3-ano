import { Link } from "react-router-dom";
import './style.css'

function Header(){
    return(
        <header>
            <h2>Facef - Franca 2024</h2>

            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/buscador">Buscador</Link>
                <Link to="/pokemon">Pokemon</Link>
                <Link to="/opcoesCorrida">Opções Corrida</Link>
            </div>
        </header>
    )
}

export default Header;