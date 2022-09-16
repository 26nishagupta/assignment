import React, { useState } from 'react'
import Parent from './Parent';

const Main = () => {
  const array = [
    {
      id : 0,
      name : 'Max',
      age : 22,
    },
    {
      id : 1,
      name : 'Sam',
      age : 25,
    },
    {
      id : 2,
      name : 'Mosh',
      age : 28,
    },
    {
      id : 3,
      name : 'Asha',
      age : 30,
    },
    {
      id : 4,
      name : 'Nisha',
      age : 24,
    },
    {
      id : 5,
      name : 'Preeti',
      age : 32,
    },
    {
      id : 6,
      name : 'Reshmi',
      age : 35,
    },
  ]

  const [showDrop,setShowDrop] = useState(false);
  const [showCheckbox,setShowCheckbox] = useState(false);
  const [showRadio,setShowRadio] = useState(false);
  const [drop,setDrop] = useState("");
  const [checked,setChecked] = useState("");
  const [radio,setRadio] = useState("");
  const [checkbox,setCheckbox] = useState([])
  
  const handleChange = (e) => {
    setRadio(e.target.id);
  }
  const handleDropChange = (e) => {
      setDrop(e.target.value)
  }
  const handleCheckbox = (e) => {
    let {value,checked} = e.target;
    setChecked(e.target.id)
    if(checked){
      setCheckbox([...checkbox,value])
    }
    else{
      setCheckbox(checkbox.filter((e)=> e!== value))
    }
  }
  const filteredRadio = array.find((element) => element.id === Number(radio));
  const filteredOption = array.find((element) =>element.name === drop);
  return (
    <div style={{margin:'8%'}}>
      <div style={{marginBottom:'20px'}}>
        <button style={{marginRight:'20px'}} onClick={()=>setShowDrop(!showDrop)}>Dropdown</button>
        <button style={{margin:'0px 20px'}} onClick={()=>setShowCheckbox(!showCheckbox)}>Checkbox</button>
        <button style={{margin:'0px 20px'}} onClick={()=>setShowRadio(!showRadio)}>Radio</button>
      </div>

      {
        showDrop && 
          <Parent 
            array={array} 
            handleChange={handleDropChange} 
            state={drop} 
            setState={setDrop} 
            found={filteredOption}
            title='Dropdown'
            input={false}
          />
      }
      {
        showCheckbox && 
          <Parent 
            type='checkbox' 
            array={array} 
            handleChange={handleCheckbox} 
            state={checked} 
            setState={setChecked} 
            title='Checkbox'
            input={true}
            checkbox={checkbox}
          />
      }
      {
        showRadio && 
          <Parent 
            type='radio' 
            array={array} 
            handleChange={handleChange} 
            state={radio} 
            setState={setRadio} 
            found={filteredRadio}
            title='Radio Button'
            input={true}
          />
      }
    </div>
  )
}

export default Main