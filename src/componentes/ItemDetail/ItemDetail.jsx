
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';




export const ItemDetail = ({ category, description, title, price, image, count }) => {


    return(
        <div className='CardItem2'>
            <h2 className="Header">{title}</h2>
            <img src={image} alt={title} className="ItemImg"/>
            <div>
                <p className="Category">
                    Categoria: {category}
                </p>
                <p className="Description">
                    Descripción: {description}
                </p>
                <p className="Price">
                    Precio: {price} €
                </p>
                <p className="Info">
                    Cantidad disponible: {count}    
                </p>
            </div>
            <div className="Footer">
                <ItemCount initial={1} stock={count} onAdd={(quantity)=>console.log('cantidad agregada', quantity )}/>
            </div>
        </div>
    )
}

