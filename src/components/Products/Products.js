import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>Gadget</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
