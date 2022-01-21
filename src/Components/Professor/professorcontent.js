import React, { useState } from "react";
import Popup from "../Popupdata/Popupdata";
const Professor_Content = ({
  name,
  biograhy,
  branch,
  university_name,
  university_address,
  image,
  research_topics,
  lectures,
  show,
  content,
}) => {
  return (
    <div class="content_1">
      <div class="picture">
        <img src={image} class="img1" />
      </div>
      <div class="writing-part">
        <p>
          <b className = "name" onClick={()=>
                    {
                      show(true,name,biograhy);
                    }}>{name}</b>
        </p>
        {/* <p>{branch}</p> */}
        <p>{university_name}</p>
        <p>{university_address}</p>
        {/* <p class="Research_field">
           <b>Research Field</b>:{research_topics.map((topic)=>
           {
              return topic;
           })}
        </p> */}

        <div class="lower_part">
          {lectures.map((lecture,index)=>
          {
            return (<p class="topic">
                    <b>Lecture Topic {index + 1}:   </b><a className="lecture" onClick={()=>
                    {
                      show(true,lecture,content[index]);
                      console.log(content[index]);
                    }}>{lecture}</a>
                  </p>)
          })}
        </div>
        <div class="margin"></div>
      </div>
    </div>
  );
};

export default Professor_Content;
