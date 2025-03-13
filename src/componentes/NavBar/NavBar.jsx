import {CartWidget} from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link , NavLink} from 'react-router-dom'
import Brand from './assets/JustGoodStuff.svg'


const NavBar = () => {
    return (
        <nav className="Navbar">
            <Link to='/'>
                <img  className="Titulo" src={Brand} alt="" />
            </Link>
            <div className='categorias'>
                <NavLink to="/category/electronics" className={({isActive})=> isActive ? 'ActiveOption' : 'Option' }><button>ELECTRONICS</button></NavLink>
                <NavLink to="/category/jewelery" className={({isActive})=> isActive ? 'ActiveOption' : 'Option' } ><button>JEWELERY</button></NavLink>
                <NavLink to="/category/men's clothing" className={({isActive})=> isActive ? 'ActiveOption' : 'Option' }><button>CLOTHES</button></NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar

