import { Link } from "react-router-dom";

function Sobre() {
    return(
        <div>
            <h1>Bem-vindo a pagina Sobre</h1>

            <Link to="/">Home</Link><br></br>
            <Link to="/buscador">Buscador</Link>
        </div>
    )
}

export default Sobre;