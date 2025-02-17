import './Item.css'
import { Link } from 'react-router-dom'

{/* este comp se encaga de lo que hay que renderizar*/}

const Item = ({ id, title, price, image, count }) => {
    return(
        <div className='CardItem'>
            <h2 className="Header">{title}</h2>
            <img src={image} alt={title} className="ItemImg"/>
            <div>
                <p className="Info">
                    Precio: {price} €
                </p>
            </div>
            <div className="ItemFooter">
                <Link to={`/item/${id}`} className="OptionButton"> {/*Link a la ruta del item*/}
                    Ver detalle
                </Link>
            </div>
        </div>
    )
}

export default Item;    