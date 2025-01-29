import CartWidget from '../CartWidget/CartWidget'


function NavBar (props){

    let{titulo,categoria1,categoria2,categoria3}=props

    
    return (
        <nav className="navbar">
            <h3 className="titulo">{titulo}</h3>
            <div className='categorias'>
                <button className='btn'>{categoria1}</button>
                <button className='btn'>{categoria2}</button>
                <button className='btn'>{categoria3}</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar