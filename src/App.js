import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './index.css';
import NavBar from './componentes/NavBar/NavBar';
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';

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
