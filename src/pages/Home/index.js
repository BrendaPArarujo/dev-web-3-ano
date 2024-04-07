import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Bem-vindo a pagina Home</h1>

            <Link to="/sobre">Sobre</Link><br></br>
            <Link to="/buscador">Buscador</Link>
        </div>
    )
}

export default Home;