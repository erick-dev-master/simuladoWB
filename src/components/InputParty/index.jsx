import { useState } from "react";

const InputParty = ({ people, setPeople }) => {

  const [name, newName] = useState()
  const [age, newAge] = useState()
  const newPeople = {
      name,
      age,
  }

const adcionar = () =>{
    setPeople([...people,newPeople])
}


  return (
    <>
      
      <input placeholder='Nome' onChange={(element) => newName( element.target.value)} />
      <input placeholder='Age' onChange={(element) => newAge( Number(element.target.value))} />
    <button onClick={adcionar}>adcionar</button>
    </>
  );
};

export default InputParty;