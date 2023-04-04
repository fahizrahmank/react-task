import React,{useState} from "react";
import './textutils.css';

 const Textutils = ()=>{

  const [curr,words]=useState("");
  const [curentletter,letter]=useState(0)
  const [curentword,word]=useState(0)

  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  const backgroundColor = isDarkMode ? '#222' : '#fff';
  const color = isDarkMode ? '#fff' : '#222';


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
    <div  style={{ backgroundColor, color}} id="App">
        <input type="text" onChange={Changing} className="textarea1" value={curr} />
          <br/>
          <div className="second">
          <button onClick={upp}>touppercase</button>
          <button onClick={low}>tolowercase</button>
          </div> 
          <br />
            <h3>length {curentletter}</h3>
            <h3>words  {curentword}</h3>
            <br />
          <button onClick={toggleDarkMode}>
                  {isDarkMode ? 'Light mode' : 'Dark mode'}
          </button>
    
      </div>


   
  )
}

export default Textutils;

