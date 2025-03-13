import {Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="Listgroup">
      {products.map((prod) => {
        return <Item key={prod.id} {...prod} />;
      })}
    </div>
  );
};
