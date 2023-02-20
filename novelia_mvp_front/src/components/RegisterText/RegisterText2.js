import React from "react";
import dummy from "../../db/data.json";
import {Link} from "react-router-dom";

function RegisterText2(){
    return(
      <ul className="text_text">
        {dummy.text.map((text)=>(
             <li key = {text.id}>
             <Link to ={`/text/${text.day}`}>
                {text.day}화 등록
             </Link>
         </li>
        ))}
      </ul>
    )
}

export default RegisterText2;