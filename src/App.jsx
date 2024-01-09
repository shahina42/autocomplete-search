import React, { useState ,useEffect} from 'react'
import "./App.css"
import resources from "./resources/countryData" 

 function App() {
  const [state,setState]=useState("");
  const [filteredData,setFilteredData]=useState([]);


const checkEscape=(e)=>{
  if(e.key=="Escape"){
    console.log("escape");
    setFilteredData([])
  }
}

const searchBar=()=>{
  console.log("search")
}
const inputTyped=(e)=>{
  setState(e.target.value);
}

useEffect(()=>{
  if(state!==""){
    let filteredResults=resources.filter((item)=>{
      return item.name.toLowerCase().startsWith(state.toLowerCase());
    });
    setFilteredData(filteredResults)
  }
  else{
    setFilteredData([])
  }
},[state]); 


  return (
    <>
    <div className='input'>
      
      <input type="text" onKeyUp={(e)=>checkEscape(e)} onChange={(e)=>inputTyped(e)} value={state}/>
      
      <button onClick={()=>searchBar()}>Search</button>
      </div>
    
    <div>
<ul>

  {
    filteredData.map((it,index)=>(
    <li key={index}>{it.name}

    </li>
    ))
  }
</ul>
    </div>
    
    </>
  )
}

export default App