import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link , NavLink} from 'react-router-dom'



const NavBar = () => {
    return (
        <nav className="Navbar">
            <Link to='/'>
                <p className="Titulo">My-Ecommerce</p>
            </Link>
            <div className='categorias'>
                <NavLink to="/category/electronics" className={({isActive})=> isActive ? 'ActiveOption' : 'Option' }><button>ELECTRONICS</button></NavLink>
                <NavLink to="/category/jewelery" className={({isActive})=> isActive ? 'ActiveOption' : 'Option' } ><button>JEWELERY</button></NavLink>
                <NavLink to="/category/men's clothing" className={({isActive})=> isActive ? 'ActiveOption' : 'Option' }><button>CLOTH</button></NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar

// function NavBar (){

//     let{titulo,categoria1,categoria2,categoria3}=props

    
//     return (
//         <nav className="navbar">
//             <h3 className="titulo">{titulo}</h3>
//             <ul className='categorias'>
//                 <a href=""><li>{categoria1}</li></a>
//                 <a href=""><li>{categoria2}</li></a>
//                 <a href=""><li>{categoria3}</li></a>
//             </ul>
//             <CartWidget/>
//         </nav>
//     )
// }

// export default NavBar