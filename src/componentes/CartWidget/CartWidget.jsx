
import cart from './assets/cart.svg'

const CartWidget=()=>{
    return(
        <div>
            <img className='cart' src={cart} alt='cart-widget'/>
            <p className='numeroCart'>0</p>
        </div>
    )
}

export default CartWidget