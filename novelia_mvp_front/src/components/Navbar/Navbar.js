import React,{useState} from 'react';
import Novelist from '../Image/Navbar_logo.png';
import './Navbar.css';
function Navbar(){
    const Text = ()=> {

        return(
        <div>
           <table>
           <tr>
           <td><img className="Novelist" alt="Novelist" style={{width:"122.9px", height:"30px",marginTop:"30px",marginLeft:"225px"}}src={Novelist} /></td>
           <td><input type="text" placeholder="  #해쉬태그로 검색해보세요" style={{width: "588px",height: "30px", marginTop:"30px",marginLeft:"318.1px",backgroundColor:'#FFFFFF',borderRadius:"50px",}}></input></td>
           </tr>
           </table>
       
              <br/><br/>
          
        </div>
        )}
   
        return(
            <div>
                <Text />
                <Button/>
            </div>
        )
    
}


//npm install styled-component 해야됨
 function Button() {
    let data=["전체작품","객관식작","주관식작","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[btnActive, setBtnActive] = useState("");
    const toggleActive = (e) => {
        setBtnActive((prev) => {
          return e.target.value;
        });
      };
   

       
        return(
            <div style={{margintop:"113px",marginLeft:"389px"}}>
                 <table>
        {data.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == btnActive ? " active" : "")}
              onClick={toggleActive}
            >
              {item}
            </button>
          </>
        );
      })}
                 </table>
    
            </div>
    
        ) 
}

 




export default Navbar;