import React, {useContext, useState} from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../firebase";
import { Timestamp, collection, writeBatch, addDoc, getDocs, query , where, documentId } from "firebase/firestore";
import './Checkout.css';
import {CheckoutForm} from "../CheckoutForm/CheckoutForm";
import { Link } from "react-router-dom";




export const Checkout = ()=>{

    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({nombre, telefono, email}) => {

        setLoading(true);


        try{
            const objOrder = {
                buyer: {nombre, telefono, email},
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids=cart.map(Item=>Item.id);
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids));
            const productsAddedFromFirestore = await getDocs(productsRef);
            const {docs} = productsAddedFromFirestore;

            docs.forEach((doc)=>{
                const dataDoc = doc.data();
                const stockDb= dataDoc.count;
                const productAddedToCart= cart.find(item=>item.id===doc.id)
                const prodQuantity= productAddedToCart?.quantity

                if(stockDb >=prodQuantity) {
                    batch.update(doc.ref, {count: stockDb - prodQuantity})
                }else{
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length===0){
                await batch.commit()

                const ordedrRef = collection(db, 'orders')

                const orderAdded = await addDoc(ordedrRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()

                }else{
                    console.log('No hay stock');
                }   

            }catch(error){

            console.log(error) 

            }finally{

            setLoading(false)

            }   
    
    }

    if(loading){
        return <div className='pantalla-carga'><p>Cargando tu pedido...</p></div>
    }

    if(orderId){
        return <div className='compra-completada'>
                    <p>Gracias por tu compra, el id de su compra es : <strong>{orderId}</strong> </p>
                    <Link to='/'><button className="ButtonBack">Back to main</button></Link>
                </div>
    }

    return(
        <div className='form-checkout-container'>
            <h2>Checkout form</h2>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}