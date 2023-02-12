import React from 'react';

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
            bottom:"2026px",
            left:"363px",
            'Font-family':"Roboto",
            'Font-weight':400,
            'Font-size':"16px",
            'line-height':"18.75px",
            'background-color': "#D9D9D9",
            'text-color':"#000000",
        };
        return(
            <div style = {style}>
              <table>
                <tr>
                    <td><button onClick={privacy}>개인정보처리방침</button></td>
                    <td><button onClick={tos}>이용약관</button></td>
                    <td><button onClick={notice}>공지사항</button></td>
                    <td><button onClick={ask}>문의하기</button></td>
                    <td>비지니스 메일 novelia@gmail.com</td>
                </tr>
              </table>
            </div>
        )
    }
}

export default Footer;