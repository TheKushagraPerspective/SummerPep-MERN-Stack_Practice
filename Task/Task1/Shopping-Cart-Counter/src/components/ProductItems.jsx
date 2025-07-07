import React, { useEffect, useState } from "react";
import CartTotal from "./CartTotal";

const ProductItems = ({ fruitData }) => {

  console.log(fruitData);
  if (!fruitData || !Array.isArray(fruitData)) {
    return <p>No products available.</p>;
  }


  const [fruitList , setFruitList] = useState([...fruitData]);
  const [totalAmount , setTotalAmount] = useState(0.00);
  const [totalQuantity , setTotalQuantity] = useState(0);



  useEffect(() => {
      let total = 0.00;
      let quantity = 0;

      fruitList.forEach((fruit) => {
          total += fruit.price * fruit.quantity;
          quantity += fruit.quantity;
      })

      setTotalAmount(total.toFixed(2));
      setTotalQuantity(quantity);      

  } , [fruitList]);




  const handleOnIncrement = (index) => {
      const updatedList = [...fruitList];
      updatedList[index].quantity += 1;
      setFruitList(updatedList);
  }

  const handleOnDecrement = (index) => {
      const updatedList = [...fruitList];
      if(updatedList[index].quantity > 0) {
        updatedList[index].quantity -= 1;
      }
      setFruitList(updatedList);
  }






  return (
    <>
      <div className="container mx-auto px-4">
      <div className="bg-white rounded-lg p-6">
        {/* 🛒 Centered heading */}
        <h1 className="text-3xl font-bold text-center mb-8">
          🛒 Shopping Cart
        </h1>

        <div className="flex flex-col items-center gap-6">
          {fruitList.map((fruit, index) => (
            <div
              key={index}
              className="w-[70%] bg-gray-50 shadow-xl rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {fruit.name}
              </h3>
              <p className="text-gray-700">${fruit.price.toFixed(2)} each</p>

              <div className="flex flex-row gap-6 py-4">
                  <button 
                  disabled={fruit.quantity === 0}
                  className={`w-7 h-7 rounded-sm bg-red-500 text-white ${fruit.quantity === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  onClick={() => handleOnDecrement(index)}>-</button>

                  <span>{fruit.quantity}</span>

                  <button 
                  className="w-7 h-7 rounded-sm bg-green-500 text-white cursor-pointer"
                  onClick={() => handleOnIncrement(index)}>+</button>
              </div>

              <div className="text-md font-semibold text-gray-800">
                Total: ${(fruit.price * fruit.quantity).toFixed(2)}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>

    <CartTotal amount = {totalAmount} quantity = {totalQuantity} />
    </>

  );
};

export default ProductItems;
