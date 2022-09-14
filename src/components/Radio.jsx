import React,{useState} from 'react'

const Radio = () => {
  const [state,setState] = useState("");
  const handleChange = (e) => {
    setState(e.target.id);
  }
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

  const found = array.find((element) => element.id === Number(state));
  return (
    <div style={{margin:'15px 0px'}}>
    <div style={{fontSize:'20px',fontWeight:'bold'}}>Radio Button</div>
    {
        array.map((element,index)=>{
          return(
            <div key={index}>
              <input type="radio" id={element.id} name="radio" value={element.name} onChange={handleChange}/>
              <label htmlFor={element.id}>{element.name}</label>
            </div>
          )
        })
      }
      <div style={{margin:'5px'}}>
        {state!=="" && <div>You have selected <b>{found.name}</b> having id {found.id} who's age is {found.age} years.</div>}
      </div>
    </div>
  )
}

export default Radio;