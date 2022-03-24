import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Header from '../../../components/client/Header';
import Footer from '../../../components/client/Footer';

type Props = {};

const ProductPage = (props: Props) => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
  ])

  const removeItem = (id: number) => {
    const newData = products.filter((item) => item.id != id);
    setProducts(newData);
  }
  return (
    <div>
      {products.map((product) =>
      <div>
        {product.id} - {product.name}
          <button onClick={() => removeItem(product.id)}> Remove</button>
      </div>)}
    </div>
  )
}

ProductPage.propTypes = {}

export default ProductPage
