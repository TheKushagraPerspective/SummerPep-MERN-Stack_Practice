import React from 'react'

const CartTotal = (props) => {


  return (
    <>
        <div className="container mx-auto px-4 my-5 flex justify-center">
            <div className="w-[70%] bg-blue-50 shadow-xl rounded-lg p-6 flex justify-center font-bold text-lg">
                Cart Total: ${props.amount} (Total Items: {props.quantity})
            </div>
        </div>
    </>
  )
}

export default CartTotal
