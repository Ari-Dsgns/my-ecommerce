
import cartIcon from './assets/cartIcon.svg'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'



 export const CartWidget=()=>{

    const {totalQuantity} = useContext(CartContext);

    return(
        <Link to='/cart'>
            <div className='CartBox'>
                <img className='CartImg' src={cartIcon} alt='cart-widget'/>
                <button className='quantity' style={{display:totalQuantity > 0 ? 'inline-block' : 'none'}}>{totalQuantity}</button>
            </div>
        </Link>
    )
}

