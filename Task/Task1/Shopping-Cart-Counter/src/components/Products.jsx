import React, {useState} from 'react'
import ProductItems from './ProductItems'

const Products = () => {

    const [fruitList , setFruitList] = useState([
        { name: "Apple", price: 1.99, quantity: 0 },
        { name: "Banana", price: 0.79, quantity: 0 },
        { name: "Orange", price: 2.49, quantity: 0 },
        { name: "Grapes", price: 1.0, quantity: 0 }
    ]);


  return (
    <>

      <ProductItems fruitData = {fruitList} />
      
    </>
  )
}

export default Products
