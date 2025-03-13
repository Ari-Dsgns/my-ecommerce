// import "./ItemDetailContainer.css";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { getProductsById } from "../../asincMock";
// import { ItemDetail } from "../ItemDetail/ItemDetail";

// export const ItemDetailContainer = () => {
//   console.log(ItemDetail);
//   const [product, setProduct] = useState(null);

//   const { itemId } = useParams();

//   useEffect(() => {
//     getProductsById(itemId)
//       .then((response) => {
//         setProduct(response);
//       })
//       .catch((error) => {
//         console.log("Error", error);
//       });
//   }, [itemId]);

//   return (
//     <div className="ItemDetailContainer">
//       {product ? (
//         <ItemDetail
//           category={product.category}
//           description={product.description}
//           title={product.title}
//           price={product.price}
//           image={product.image}
//           count={product.rating.count}
//         />
//       ) : (
//         <p>Loading...</p>
//       )}
//       <div className="ButtonBack">
//         <Link to="/">Volver al inicio</Link>
//       </div>
//     </div>
//   );

// };

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

