
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';



export const  ItemDetail = ({id, category, description, title, price, image, count}) => {

    const [quantityAdded, setQuantityAdded]= useState(0);

    const {addItem} = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
    

    const item = {
        id,
        title,
        image,
        price ,
        count
     }

     addItem(item, quantity);

    }
    return(
        <div className='CardItem2'>
            <h2 className="Header">{title}</h2>
            <img src={image} alt={title} className="ItemImg"/>
            <div className='Card-info'>
                <p className="Category">
                   <strong>Category : </strong>{category}
                </p>
                <p className="Description">
                  <strong>Description : </strong>{description}
                </p>
                <p className="Price">
                 <strong>Price : </strong>{price} €
                </p>
                <p className="Info">
                  <strong>Stock : </strong>{count}    
                </p>
            </div>
            <div className="Footer">

                {
                    quantityAdded > 0 ? (
                    
                    <Link to='/cart'><button className="ViewCartButton">Checkout</button></Link>
                    ) : (
                        <ItemCount initial={1} stock={count} onAdd={handleOnAdd}/>
                    )       
                }
            </div>
            <Link to='/'><button className="ButtonBack">Back to products</button></Link>
        </div>
        
    )
}

