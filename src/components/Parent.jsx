import React from 'react'

const Parent = (props) => {
  const {state,type,array,handleChange,found,title,input,checkbox} = props; 
  return (
    <div style={{margin:'15px 0px'}}>
    <div style={{fontSize:'20px',fontWeight:'bold'}}>
      {title}
    </div>
    {input ? 
        array.map((element,index)=>{
          return(
            <div key={index}>
              <input type={type} id={element.id} name="radio" value={element.name} onChange={handleChange}/>
              <label htmlFor={element.id}>{element.name}</label>
            </div>
          )
        })
        :
        <select defaultValue='Select One' onChange={handleChange} style={{marginTop:'10px'}}>
          {array.map((element,index)=>{
            return(
              <option key={index} id={element.id} value={element.name}>{element.name}</option>
            )          
          })}
        </select>
      }

      {type==='checkbox' ?
        checkbox.map((name,index)=>{
          return(
            <div key={index} style={{margin:'5px'}}>
              {state!=="" && <div>You have selected the checkbox <b>{name}</b></div>}
            </div>
          )}
        )
        :
        <div style={{margin:'5px'}}>
          {state!=="" && <div>You have selected <b>{found.name}</b> having id {found.id} who's age is {found.age} years.</div>}
        </div>
      }
    </div>
  )
}

export default Parent