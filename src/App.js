import "./App.css";
import React, { useState } from "react";
import Professor from "./Components/Professor/professor.js";
import Popup from "./Components/Popupdata/Popupdata";
function App() {
  const [show,setshow] = useState({
    heading : "",
    content : "",
    display:false
  });
  function handleshow(ok,lecture,content)
  {
    // console.log(ok);
    setshow({
      heading : lecture,
      display : ok,
      content : content
    });
    // console.log(lecture);
  }
  function check(ok)
  {
    // console.log(ok);
    setshow({
      heading : "",
      display : false,
    });
  }
  return (
    <>
      <Professor toshow = {handleshow}/>
      {show.display  && <Popup show = {show} check = {check}/>}
    </>
  );
}

export default App;
