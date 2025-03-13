import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext);  

    if(cart.length === 0){
        return(
            <div className='cart-empty-container'>
                <h2>The cart is empty</h2>
                <Link to='/'><button className='ButtonBack'>Back to products</button></Link>
            </div>
        )
    }
    return (
        <div className='cart-filled-container'> 
            {cart.map(p => <CartItem Key={p.id} item={p}/>)}
            <div className='checkout-container'>
                <h3>Total : {total} €</h3>
                <div className='Button-container'>
                <Link to='/checkout'><button className='ButtonCheckout'>Checkout</button></Link>
                    <button onClick={()=>clearCart()} className='ButtonClear'>Clear cart</button>
                </div>
            </div>
            <Link to='/'><button className='ButtonBack'>Back to products</button></Link>
        </div>
    )
}