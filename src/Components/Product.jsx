import { Link } from "react-router-dom";

export const Product = ({ products }) => (
  <>
    <ul>
        {products.map((product, index)=>(
            <li key={index}>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </li>
        ))}
    </ul>
  </>
);
