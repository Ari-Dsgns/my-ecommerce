import CartWidget from '../CartWidget/CartWidget'


function NavBar (props){

    let{titulo,arroba,img}=props

    
    return (
        <nav>
            <h3>{titulo}</h3>
            <div>
                <button>SmartPhones</button>
                <button>Tablets</button>
                <button>Laptops</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar