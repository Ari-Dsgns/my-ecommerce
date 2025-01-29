import './index.css';
import NavBar from './componentes/NavBar/NavBar';

// import "bulma/css/bulma.css" ;
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';



function App(){
    return(
        <div className="container">
            
            <NavBar titulo="My-Ecommerce" categoria1="Smartphones" categoria2="Tablets" categoria3="Laptops" />
            <ItemListContainer greeting={"En este container agregaremos los items"}/>
            
        </div>
        
    )
}

export default App;