import React , {useState , useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';

const Dynamic_Form = () => {

    const [formFields, setFormFields] = useState([
      { id: uuidv4(), value: "" },
      { id: uuidv4(), value: "" }
    ]);



    const handleOnSubmit = (e) => {
        e.preventDefault();

        const hasEmptyField = formFields.some(field => field.value.trim() === "");

        if(hasEmptyField) {
          alert("Some input fields are empty");
          return;
        }
        else {
          alert("Successfully submitted the form");
          
          const clearedFormData = formFields.map(field => (
            {...field , value:""}
          ))
          setFormFields(clearedFormData);
        }
    }


    const handleOnRemove = (idToRemove) => {
        const updatedFormFields = formFields.filter(field => field.id !== idToRemove);
        setFormFields(updatedFormFields);
    }

    const handleOnAddField = () => {
        setFormFields([...formFields , {id: uuidv4() , value: ""}]);
    }

    const handleOnChange = (id , newValue) => {
        const updatedFormFields = formFields.map(field => field.id === id ? {...field , value : newValue} : field);
        setFormFields(updatedFormFields);
    }







  return (
    <>
        <div className="container flex justify-center">
            <div className="w-full max-w-md flex flex-col justify-center items-center my-5 shadow-xl px-4">
                    <form onSubmit={handleOnSubmit}>
                        <h1 className='text-xl font-bold my-5 text-center'>Dynamic Form Builder</h1>
                        <div className='flex flex-col gap-2'>
                            {formFields.map((form , index) => (
                                <div className="flex items-center gap-3" key={form.id}>
                                    <input 
                                    type="text"
                                    value={form.value}
                                    placeholder={`field ${index+1}`}
                                    className='border px-2 py-1  rounded-lg' 
                                    onChange={(e) => handleOnChange(form.id , e.target.value)}
                                    />

                                    <button 
                                    className="bg-red-500 text-white px-2 py-1 rounded-lg"
                                    onClick={() => handleOnRemove(form.id)}
                                    >
                                      Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button 
                        type='button'
                        className='my-3 flex bg-green-500 w-full text-white justify-center rounded-lg p-2'
                        onClick={handleOnAddField}
                        >Add Field</button>
                        <button className='my-3 flex bg-blue-500 w-full text-white justify-center rounded-lg p-2'>Submit</button>
                    </form>
            </div>
        </div>
    </>
  )
}

export default Dynamic_Form
