import { Link,useParams } from "react-router-dom";
import products from '../data';
const SingleProduct = () => {
   const {productId }=  useParams();
   const product = products.find((product)=>product.id === productId)
  const {image,name}= product;

  return (
    <section className='section product'>
      <img src= {image} alt={name} />

      <h2>{productId}</h2>
<h3>{name}</h3>
      <Link to='/products' >back</Link>
    </section>
  );
};

export default SingleProduct;
