import { useContext } from 'react'
import {CartContext} from '../../Context/CartContext'
import './CartItem.css'


export const CartItem = ({item}) => {

    const {removeItem} = useContext(CartContext)

    return(
        <div className='item-container'>
            <div className='item-info'>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
            </div>
            <div className='item-cantidad'>
                <p>Precio por unidad: {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: {(item.quantity * item.price).toFixed(2)}</p>
            </div>
            <button onClick={()=> removeItem(item.id)} className='DeleteButton'>Delete</button>
        </div>    
    )

}

