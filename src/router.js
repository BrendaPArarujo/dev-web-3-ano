import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Buscador from './pages/Buscador';
import Header from './components/Header';
import Error from './pages/Error';
import Pokemon from './pages/Pokemon';
import Corrida from './pages/corrida';
import OpcoesCorrida from './pages/OpcoesCorrida';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path="/buscador" element={ <Buscador/> } />
                <Route path="/pokemon" element={ <Pokemon/> } />
                <Route path="/corrida/:id" element={ <Corrida/> } />
                <Route path="/opcoesCorrida" element={ <OpcoesCorrida/> } />

                <Route path="*" element={ <Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;