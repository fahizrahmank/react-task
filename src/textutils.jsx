import React,{useState} from "react";


 const Textutils = ()=>{

  const [curr,words]=useState("");
  const [curentletter,letter]=useState(0)
  const [curentword,word]=useState(0)


  const Changing = (e)=>{
    const X =  e.target.value;
    words(X);
    letter(X.split(" ").join("").length)
    word(X.trim().split(/\s+/).length)
  }
const upp = ()=> {
  words(curr.toUpperCase())
}
const low = ()=> {
  words(curr.toLowerCase())
}

  return (
    <div>
<input type="text" onChange={Changing} className="textarea1" value={curr} />
      <br />

<button onClick={upp}>touppercase</button>
<button onClick={low}>tolowercase</button>
<h3>length {curentletter}</h3>
<h3>words  {curentword}</h3>

    </div>
  )
}

export default Textutils;
