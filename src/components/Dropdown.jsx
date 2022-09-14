import React,{useState} from 'react'

const Dropdown = () => {
  const [state,setState] = useState("");
  
  const array = [
    {
      id : '',
      name : '--Select one--',
      age : '',
    },
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
    if(e.target.value==='--Select one--'){
      setState("")
    }
    else{
      setState(e.target.value)
    }
  }

  const found = array.find((element) =>element.name === state);

  return (
    <div style={{margin:'15px 0px'}}>
      <div style={{fontSize:'20px',fontWeight:'bold'}}>Dropdown</div>
      <select onChange={handleChange} style={{marginTop:'10px'}}>
        {array.map((element,index)=>{
          return(
            <option key={index} id={element.id} value={element.name}>{element.name}</option>
          )          
        })}
      </select>
      <div style={{margin:'5px'}}>
        {state!=="" && <div>You have selected <b>{found.name}</b> having id {found.id} who's age is {found.age} years.</div>}
      </div>
    </div>
  )
}

export default Dropdown;