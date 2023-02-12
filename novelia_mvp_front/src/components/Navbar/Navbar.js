import React from 'react';
import Novelist from '../Image/Navbar_logo.png';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Text />
                <Button/>
            </div>
        )
    }
}


const Text = ()=> {

 return(
 <div>
    <table>
    <tr>
    <td><img className="Novelist" alt="Novelist" style={{width:"122.9px", height:"30px",marginTop:"30px",marginLeft:"225px"}}src={Novelist} /></td>
       <td><input type="text" placeholder="#해쉬태그로 검색해보세요" style={{width: "588px",height: "30px", marginTop:"30px",marginLeft:"441px",backgroundColor:'#FFFFFF'}}></input></td>

    </tr>
       
    </table>

       <br/><br/>
   
 </div>
 )}
 class Button extends React.Component{
    constructor(props){
        super(props);
    }render(){
       
        return(
            <div style={{margintop:"106px",marginLeft:"375px"}}>
                 <table>
                    <tr>
                        <td><button style={{width:"Hug",height:"Hug",padding:"7px,14px",gap:"10px",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{width:"Hug",height:"Hug",padding:"7px,14px",gap:"10px",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{width:"Hug",height:"Hug",padding:"7px,14px",gap:"10px",borderRadius:"50px"}}>주관식작</button></td>
                        <td><button style={{width:"Hug",height:"Hug",padding:"7px,14px",gap:"10px",borderRadius:"50px"}}>선호태그</button></td>
                        <td><button style={{width:"Hug",height:"Hug",padding:"7px,14px",gap:"10px",borderRadius:"50px"}}>선호태그</button></td>
                        <td><button style={{width:"Hug",height:"Hug",padding:"7px,14px",gap:"10px",borderRadius:"50px"}}>선호태그</button></td>
                        <td><button style={{width:"Hug",height:"Hug",padding:"7px,14px",gap:"10px",borderRadius:"50px"}}>선호태그</button></td>
                        <td><button style={{width:"Hug",height:"Hug",padding:"7px,14px",gap:"10px",borderRadius:"50px"}}>선호태그</button></td>
                    </tr>
                 </table>
    
            </div>
    
        )
    }
   }
 




export default Navbar;