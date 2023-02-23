import React, {useState} from "react";
import axios from "axios";

var state = {
    createdAuthCode:"",
    authCodeCheck: false,
}

function EmailConfirmPage(props)
{
    const[Email, setEmail] = useState("");
    const[AuthCode, setAuthCode] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onAuthCodeHandler = (event) => {
        setAuthCode(event.currentTarget.value);
    };

    const onSendMailHandler = (event) => {
        event.preventDefault();
        state.cretedAuthCode = Math.random().toString(36).substring(2,8);

        const dataToSubmit = {
            email: Email,
            auth: state.createdAuthCode,
        };

        var cast = {
            "email" : Email
        }
        localStorage.setItem("cast",JSON.stringify(cast));

    };
    const onCheckHandler = (event) => {
        event.preventDefault();

        if(state.createdAuthCode === AuthCode){
            state.authCodeCheck = true;
            alert("이메일 인증에 성공하셨습니다.");
            document.getElementById("authorizedConfirm")
            .setAttribute("onClick", "location.href = '/register");
        }else{
            state.authCodeCheck = false;
            alert("인증코드가 일치하지 않습니다.");
        }
    };

    const Authentication = (event) => {
        event.preventDefault();

        if(!state.authCodeCheck){
            alert("먼저 이메일 인증을 해주세요.");
        }
    }
}

class Registerpage3 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
             <div>
                
                <Text />
                
            </div>
            
            
        )
    }
}

function Text(){

    const [nickname, setnickname] = useState("");
    const [email, setemail] = useState("");
    const [selected, setSelected] = useState("");
    const [age, setAge] = useState("");
    


    const onnicknamehandler = (e) => {
        setnickname(e.target.value);
    }

    const onemailhandler = (e) => {
        setemail(e.target.value);
    }

    const ongenderhandler = (e) => {
        setSelected(e.target.value);
    }

    const onAgehandler =(e) => {
        setAge(e.target.value);
    }

    function activeButton(){
        alert("확인완료");
    }

        function submitactiveButton(event){
            event.preventDefault();
            alert("회원가입이 완료되었습니다.");

            var cast = {
                nickname: nickname,
                gender : selected,
                email: email,
                age : age
            };
            localStorage.setItem("cast",JSON.stringify(cast));
        window.location.href="/register4"; }

        const style={
            'position':'absolute',
            'margin-top': "-9px",
            'margin-left': "669px",
        }
        const style1={
            'width':"151px",
            'height':"17px",
            'font-family': "Roboto",
            'top':"-20px",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "19px",
            'display': "flex",
            'align-items': "center",
        }
        const style2={
            'width':"240px",
            'height':"30px",
           
            'font-family': "Roboto",
            'top':"-20px",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "19px",
            'display': "flex",
            'align-items': "center",
        }
        const style3={
            'box-sizing':"boreder-box",
            'display': "flex",
            'justify-content':"center",
            'align-items': "center",
            'gap':"10px",
            'width':"131px",
            'height':"45px",
            
            'borderRadius': "4px",
            'font-family': "Roboto",
            'top':"-20px",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "18.75px",
            
            
            'color': "#FFFFFF",
            'background-color':"#AA0140",
            
        }
    return(
        <div style={style}>
        
        <div style={style1}>
            닉네임*
        </div>
        <div style={style2}>
            <input type="label"placeholder="플레이스 홀더" onChange={onnicknamehandler}></input>

        </div>
        <div style={style3} onClick={activeButton}>
        <botton > 중복확인</botton>
        </div>
        <div>
               <select name="성별" style={{width:"240px",height:"30px"}} onChange={ongenderhandler}>
                  <option defaultValue="성별(남/여)" hidden>성별(남/여)*</option>
                  <option value="남">
                    남
                  </option>
                  <option value="여">
                    여
                  </option>
               </select>
            </div>
            <div>
                <select name="나이대" style={{width:"240px",height:"30px"}} onChange={onAgehandler}>
                    <option defaultValue="나이대" hidden>나이대*</option>
                    <option value="10대">
                        10대
                    </option>
                    <option value="20대">
                        20대
                    </option>
                    <option value="30대">
                        30대
                    </option>
                    <option value="40대이상">
                        40대이상
                    </option>
                </select>
        </div>
        <div>
                <h5 style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666"}}>이메일*</h5>
            </div>
            <div>
                <input type="label" style={{width:"240px",height:"30px"}} placeholder="본인인증용 이메일" onChange={onemailhandler}></input>
            </div>
            <div>
                <button>Check</button>
            </div>
            <div>
                <h5 style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666"}}>이메일 확인*</h5>
            </div>
            <div>
                <input type="label" style={{width:"240px",height:"30px"}} placeholder="이메일 확인"></input>
            </div>
            <div>
                <button>Check</button>
            </div>
            <div>
                <h5 style={{width:"59px",height:"19px"}}>선호장르</h5>
            </div>
            <div>
                <table>
                    <tr>
                        <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                        <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                        <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                        <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                        <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                        <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <h5>선호태그</h5>
            </div>
            <div>
                <table>
                    <tr>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    </tr>
                    <tr>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    </tr>
                    <tr>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    </tr>
                    <tr>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>선호태그</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <h5>금지태그</h5>
            </div>
            <div>
            <table>
                    <tr>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    </tr>
                    <tr>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    </tr>
                    <tr>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    </tr>
                    <tr>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    <td><button style={{width:"Hug",height:"Hug",borderRadius:"50px",padding:"7px 14px 7px 14px"}}>금지태그</button></td>
                    </tr>
                </table>
            </div>
        <div>
        <button style={style3} onClick={submitactiveButton}>입력완료</button>
        </div>
    
        </div>
    )
}





export default Registerpage3;