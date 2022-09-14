import React, { useState } from 'react'

const Checkbox = () => {
  
  const [state,setState] = useState("");
  const [checkbox,setCheckbox] = useState([])

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
  ]


  const handleChange = (e) => {
    let {value,checked} = e.target;
    setState(e.target.id)
    if(checked){
      setCheckbox([...checkbox,value])
    }
    else{
      setCheckbox(checkbox.filter((e)=> e!== value))
    }
  }

  return (
    <div style={{margin:'15px 0px'}}>
      <div style={{fontSize:'20px',fontWeight:'bold'}}>Checkbox</div>
      {
        array.map((element,index)=>{
          return(
            <div key={index}>
              <input type="checkbox" id={element.id} name={element.name} value={element.name} onChange={handleChange}/>
              <label htmlFor={element.id}>{element.name}</label>
            </div>
          )
        })
      }
        {checkbox.map((name,index)=>{
          return(
            <div key={index} style={{margin:'5px'}}>
              {state!=="" && <div>You have selected the checkbox <b>{name}</b></div>}
            </div>
          )}
        )}
    </div>
  )
}

export default Checkbox