import './index.css';
import NavBar from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
import "bulma/css/bulma.css" ;



function App(){
    return(
        <div className="navbar is-flex">
            
            <NavBar className="" titulo="e-commerce" />
            
        </div>
        
    )
}

export default App;