import './Item.css'
import { Link } from 'react-router-dom'

{/* este comp se encaga de lo que hay que renderizar*/}

export const Item = ({ id, title, price, image, count }) => {
    return(
        <div className='CardItem'>
            <h2 className="Header">{title}</h2>
            <img src={image} alt={title} className="ItemImg"/>
            <div className='Footer'>
                <p className="Info">Price: {price} € </p>
                <Link to={`/item/${id}`}><button className="OptionButton">Details</button></Link>
            </div>
        </div>
    )
}

