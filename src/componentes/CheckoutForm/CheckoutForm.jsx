import './CheckoutForm.css';
import { useState } from 'react';

export const CheckoutForm = ({onConfirm})=>{

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState(''); 
    const [email, setEmail] = useState('');

    const handleConfirm = (e) => {
        e.preventDefault();
        
        const userData ={nombre, telefono, email}

        onConfirm(userData)

    }

    return(
        <div>
            <form onSubmit={handleConfirm} className='CheckoutForm'>
                <label>
                    <input type="text" value={nombre} onChange={({target})=> setNombre(target.value)} placeholder='Nombre' required/>
                </label>
                <label>
                    <input type="text" value={telefono} onChange={({target})=> setTelefono(target.value)} placeholder='Telefono' required />
                </label>
                <label>
                    <input type="email" value={email} onChange={({target})=> setEmail(target.value)} placeholder='Email' required />
                </label>
                <div>
                    <button type='submit' className='FormCheckoutButton'>Confirm checkout</button>
                </div>
            </form>
        </div>
    )
}