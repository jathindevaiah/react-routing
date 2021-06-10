import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const urlParams = useParams();

  return (
    <section>
      <h1>Products Details</h1>
      <h1>{urlParams.productId}</h1>
    </section>
  );
};

export default ProductDetails;
