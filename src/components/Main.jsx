import React, { useState } from 'react'
import Checkbox from './Checkbox';
import Dropdown from './Dropdown'
import Radio from './Radio';

const Main = () => {
  const [drop,setDrop] = useState(false);
  const [checkbox,setCheckbox] = useState(false);
  const [radio,setRadio] = useState(false);
  

  return (
    <div style={{margin:'8%'}}>
      <div style={{marginBottom:'20px'}}>
        <button style={{marginRight:'20px'}} onClick={()=>setDrop(!drop)}>Dropdown</button>
        <button style={{margin:'0px 20px'}} onClick={()=>setCheckbox(!checkbox)}>Checkbox</button>
        <button style={{margin:'0px 20px'}} onClick={()=>setRadio(!radio)}>Radio</button>
      </div>
      {drop && <Dropdown />}
      {checkbox && <Checkbox />}
      {radio && <Radio />}
    </div>
  )
}

export default Main