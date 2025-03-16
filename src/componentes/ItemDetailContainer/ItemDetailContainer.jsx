
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {getDoc ,doc} from 'firebase/firestore';
import { db } from "../../firebase";



export const ItemDetailContainer = () => {
    
  const [product, setProduct] = useState(null)
  


  const { itemId } = useParams()

  

  useEffect(()=>{   
    
    
      const docRef = doc(db, 'products', itemId)

      getDoc(docRef)
      .then(response => {
          const data = response.data()
          const productAdapted = {id: response.id, ...data}
          setProduct(productAdapted)
          console.log(productAdapted);
        
      })
      .catch(error => {
          console.error(error)
          
      })

        
     

  }, [itemId])



  return(
      <div className='ItemDetailContainer'>
          <ItemDetail {...product} />
      </div>
  )


}

