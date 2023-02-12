import React,{Component} from 'react';
import KaKao from '../Image/카카오톡.png';
import Naver from '../Image/네이버.png';
import Novelist from '../Image/image 1.png';
/*import {REST_API_KEY , REDIRECT_URI }from './KakaoLogin';
/*function KakaoLogin(){
    Kakao.Auth.longin({
success:: function (response){
    Kakao.API.request({
        url:
    })
}
})}*/
/*
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const handleLogin =()=>{
window.location.href = KAKAO_AUTH_URL;
}*/
class Loginpage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           
            <div>
                
                <Text />
                <Square />
                <Kakao />
            </div>
            
            
        )
    }
}

class Kakao extends Component{
    componentDidMount(){
        const kakaoScript =document.createElement("script");
        kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
       document.head.appendChild(kakaoScript); 
    
       kakaoScript.onload =()=>
       {
           window.Kakao.init(REST_API_KEY);
           window.Kakao.Auth.createLoginButton({
            container:"#kakao-login-btn",
            success:(auth)=>{
                console.log("#Kakao 로그인 완료",auth);
            window.Kakao.API.request({
                url:REDIRECT_URI,
            success:(res)=>{    
                console.log("#Kakao 사용자 정보",res);
            },
        fail:(err)=>{
            console.log(err);
        },
    });
                   },
                   fail:(err)=>{
                    console.log(err);
                   },
    });  };
}
render(){
    return<button type = "button"id="kakao-login-btn"></button>;
}
}          
class Square extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const style={
            width:"588px",
            height:"850px",
            'margin-top': "-400px",
            'margin-left': "666px",
            'background-color': "#D9D9D9",
        };
        return(
            <div style = {style}>

            </div>
        )
    }
}

class Text extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        const style={
            "position": "absolute",
            'width': "378px",
            'height' : "121px",
            'left': "781px",
            'top': "492px",
            
            'font-family': "Roboto",
            'font-style': "Regular",
            'font-weight': 400,
            'font-size': "(mixed)",
            'line-height': "100%",
            'align-item': "center",
            'Vertical-align': "center",
            'text-align': "center",
            'color':"#000000",
            
        };
    
        const style3 = {
            "position":"absolute",
            'width':"72px",
            'height':"72px",
            'left':"870px",
            'top':"673px",
        }
        const style4 = {
            "position":"absolute",
            'width':"57.6px",
            'height':"57.6px",
            'left':"972px",
            'top':"673px",

        }

        return(
            <div>
            <div style={{marginTop:"250px",marginLeft:"870px"}}>
                <img className="Novelist" alt="Novelist" style={{width:"180px", height:"163px"}}src={Novelist} />
            </div>
            <div style={style}>
                <h1>Login</h1>
                
                <h3>소셜 로그인으로 빠르게 시작하세요!</h3>
                
            </div>
            <div className="image">
                <div style={style3}><img className="Kakao" alt="kakao" src={KaKao} /*onClick={handleLogin}*/ style={{width:"78px",height:"78px"}} /></div>
                <div style={style4}><img className="Naver" alt="naver" src={Naver} style={{width:"78px", height:"78px"}} /></div>
                
            </div>
            </div>
        )
    }
    
}


export default Loginpage;