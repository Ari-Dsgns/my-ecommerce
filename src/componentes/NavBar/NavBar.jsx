import CartWidget from '../CartWidget/CartWidget'


function NavBar (props){

    let{titulo,categoria1,categoria2,categoria3}=props

    
    return (
        <nav className="navbar">
            <h3 className="titulo">{titulo}</h3>
            <ul className='categorias'>
                <a href=""><li>{categoria1}</li></a>
                <a href=""><li>{categoria2}</li></a>
                <a href=""><li>{categoria3}</li></a>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar