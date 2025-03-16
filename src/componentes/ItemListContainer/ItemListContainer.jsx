

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { ItemList } from "../ItemList/ItemList";
import {getDocs,  collection, query, where} from "firebase/firestore";
import { db } from "../../firebase";

export const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
    

  const { categoryId } = useParams();

  useEffect(()=>{

      

      const collectionRef = categoryId 
      ? query(collection(db, 'products'), where('category', '==', categoryId)) 
      : collection(db, 'products');

      getDocs(collectionRef)
      .then(response => {
          const productAdapted = response.docs.map(doc => {
              const data = doc.data()
              return {id: doc.id, ...data}
          })
          console.log(productAdapted);
          
          setProducts(productAdapted)
      })
      .catch(error => {
          console.error(error)
      })
      

  }, [categoryId])

  return(
      <div className="itemsLiscContainer">
          
          <ItemList products={products} />
      </div> 
  )

};








