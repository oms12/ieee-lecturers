import React, { useState } from "react";
import "./Popup.css";
function Popup(props)
{
    const data = props.show;
    // console.log(typeof(data));
    return (
        <>
           <div className={(props.show ?"bg-modal2" : "bg-modal1")}>
	      <div class="modal-contents"> 

		   <div class="close" onClick={()=>
           {
              props.check(false);
           }}>+</div>
           <h2 className="heading">{props.show && props.show.heading}</h2>
           <br></br>
           <p className="lecturecontent">{props.show && props.show.content}</p>
	     </div> 
      </div> 
        </>
    );
}

export default Popup;