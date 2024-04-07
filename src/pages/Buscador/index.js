import { FiSearch } from 'react-icons/fi';
import './styles.css'
import { useState } from 'react'
import api from '../../services/api';
import { Link } from "react-router-dom";

function Buscador(){


    const [input, setInput ] = useState('');
    const [cep, setCep] = useState('');

    async function handleSearch(){
        //https://viacep.com.br/ws/01001000/json/
        if (input === ''){
        alert("Preencha algum cep!")
        return;
        }

        try{
        const response = await api.get(`${input}/json`)
        setCep(response.data)
        setInput("")
        }catch{
        alert("Erro ao buscar")
        setInput("")
        }
    }

    return (

        
        <div className="container">
            
            
        <h1 className="title">Buscando CEP</h1>

        <div className="containerInput">
            <input
            type="text"
            placeholder="Digite seu CEP..."
            value={input}
            onChange={(e) => setInput(e.target.value)}/>

            <button className="buttonSearch" onClick={handleSearch}><FiSearch size={25} color="#FFF"/></button>
        </div>
        {Object.keys(cep).length > 0 && (
            <main className='main'>
            <h2>CEP: {cep.cep}</h2>
            <span>Rua: {cep.logradouro}</span>
            <span>Bairro: {cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
            </main>

        )}
    
        </div>
    );
}

export default Buscador;