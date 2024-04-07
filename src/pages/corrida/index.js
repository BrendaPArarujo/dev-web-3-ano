import { useParams } from "react-router-dom";

function Corrida(){

    const { id } = useParams();

    if(id=== '5km'){
        return(
            <div>
                <h1>Corrida 5km</h1>
                <h2>Tempo médio Masculino: 30min <br/> Tempo médio Feminino: 36min </h2>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRur9PTakwPs14nM8i8-2yAPnheKBbMoCJEka8xAdm6Aw&s' alt="corrida 5km"/>
            </div>
        )
    }
if (id === '10km'){
    return(
        <div>
            <h1>Corrida 10km</h1>
            <h2>Tempo médio Masculino: 50min <br/> Tempo médio Feminino: 1hr </h2>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZ48goDPLQEzpG0VJC_ReemL5G0mIMAXmkkOr9pjhbA&s' alt="corrida 10km"/>
        </div>
    )
}

if (id === '21km'){
    return(
        <div>
            <h1>Corrida 21km (meia maratona)</h1>
            <h2>Tempo médio Masculino: 2hr <br/> Tempo médio Feminino: 2hr15min </h2>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyFb_XkikV_unqoG3wL4_HuH_tw12Z81iXQ&s' alt="corrida 21km"/>
        </div>
    )
}

    
}

export default Corrida;