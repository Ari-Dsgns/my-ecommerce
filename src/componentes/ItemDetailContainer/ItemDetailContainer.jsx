import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsById } from "../../asincMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  console.log(ItemDetail);
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductsById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
      <div className="ButtonBack">
        <Link to="/">Volver al inicio</Link>
      </div>
    </div>
  );
};
