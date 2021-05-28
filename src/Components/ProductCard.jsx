import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductCard = ({products}) => {
    let { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState(null)
    useEffect(()=>{
        let result = products.find(product => product.id.toString() === id)
        setCurrentProduct(result)
        console.log("id", id)
        console.log("result", result)
        console.log("products", products)

    },[])
    console.log("id", id)
  return (
    <div>
      <h1>Title: {currentProduct?.name}</h1>
      <h2>My id: {currentProduct?.id} </h2>
    </div>
  );
};
