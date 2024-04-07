import { Link } from "react-router-dom";

function Error(){
    return(
        <div>
            <h2>
                Essa página não existe
            </h2>
            <br />

            <span>Mas você pode navegar nas seguintes páginas: </span><br/>
                <Link to="/">Home</Link><br/>
                <Link to="/sobre">Sobre</Link><br/>
                <Link to="/buscador">Buscador</Link><br/>
        </div>
    )
}

export default Error;