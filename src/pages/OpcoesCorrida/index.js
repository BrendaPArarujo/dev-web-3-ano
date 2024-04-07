import { Link } from "react-router-dom";


function OpcoesCorrida(){
    return(
    <div>
            <h2>Opções de corrida</h2>

            <div className="menu">
                <Link to="/corrida/5km">5KM</Link><br/>
                <Link to="/corrida/10km">10KM</Link><br/>
                <Link to="/corrida/21km">21KM</Link><br/>
                
            </div>
        </div>
    )
}

export default OpcoesCorrida;