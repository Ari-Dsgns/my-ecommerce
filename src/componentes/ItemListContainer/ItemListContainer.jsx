import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asincMock";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const asynFun = categoryId ? getProductsByCategory : getProducts;

    asynFun(categoryId)
      .then((resp) => {
        setProducts(resp);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};
