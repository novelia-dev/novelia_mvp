import React from 'react';
import facebook from '../Image/facebook.png';
import twitter from '../Image/twitter.png';
import instagram from '../Image/instagram.png';
import logo from '../Image/수평로고.png';

function privacy(){
    window.location.href="/privacy";
}
function tos(){
    window.location.href="/tos";
}
function notice(){
    window.location.href="/notice";
}
function ask(){
    window.location.href="/ask";
}

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Square />
            </div>
        )
    }
}

class Square extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const style={
            width:"1194px",
            height:"60px",
            bottom:"2400px",
            left:"363px",
            'Font-family':"Roboto",
            'Font-weight':400,
            'Font-size':"16px",
            'line-height':"18.75px",
            'background-color': "#FFFFFF",
            'text-color':"#000000",
            marginLeft:"360px",
        };
        return(
            <div style = {style}>
              <table>
                <tr>
                    <td><button onClick={privacy} style={{backgroundColor:"#FFFFFF", borderColor:"#FFFFFF"}}>개인정보처리방침</button></td>
                    <td><button onClick={tos} style={{backgroundColor:"#FFFFFF", borderColor:"#FFFFFF"}}>이용약관</button></td>
                    <td><button onClick={notice} style={{backgroundColor:"#FFFFFF", borderColor:"#FFFFFF"}}>공지사항</button></td>
                    <td><button onClick={ask} style={{backgroundColor:"#FFFFFF", borderColor:"#FFFFFF"}}>문의하기</button></td>
                    <td>비지니스 메일 novelia@gmail.com</td>
                    <td><img src={facebook} alt="페이스북"></img></td>
                    <td><img src={twitter} alt="트위터"></img></td>
                    <td><img src={instagram} alt="인스타그램"></img></td>
                    <td><img src={logo} alt="수평로고"></img></td>
                    <td><h5>All right reserved</h5></td>
                </tr>
              </table>
            </div>
        )
    }
}

export default Footer;