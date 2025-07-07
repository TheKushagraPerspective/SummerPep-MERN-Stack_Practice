import React , {useState} from 'react'

const Child3 = () => {

    const [defaultFruit , setDefaultFruit] = useState("Apple");

    const handleOnChange = () => {
        const fruit = defaultFruit === "Apple" ? "Banana" : "Apple";
        setDefaultFruit(fruit);
    }

  return (
    <>
        < hr/>
        <div>{defaultFruit}</div>
        <button onClick={handleOnChange}>Click to Change Name</button>
    </>
  )
}

export default Child3
