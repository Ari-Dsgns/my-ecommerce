import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './index.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer';

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                <Route pathe='*' element={<h1>404</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}
// function App(){
//     return(
//         <div className="container">
//             <NavBar titulo="My-Ecommerce" categoria1="Smartphones" categoria2="Tablets" categoria3="Laptops" />
//             <ItemListContainer greeting={"Bienvenidos"}/>
//             <ItemDetailContainer />
//             <ItemCount initial={1} stock={10} onAdd={(quantity)=>console.log('click', quantity)}/>
//         </div>
        
//     )
// }

// function App(){
//     return(
//         <div className="container">
//             <NavBar titulo="My-Ecommerce" categoria1="Smartphones" categoria2="Tablets" categoria3="Laptops" />
//             <div className='itemListContainer'>
//                 <ItemListContainer greeting={"Bienvenidos"}/>
//                 <ItemDetailContainer />
//             </div>
            
//            <ItemCount initial={1} stock={10} onAdd={(quantity)=>console.log('click', quantity)}/>
//         </div>
        
//     )
// }

// export default App;