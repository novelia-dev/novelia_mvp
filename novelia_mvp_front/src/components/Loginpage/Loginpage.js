import React,{Component, useEffect} from 'react';
import KaKao from '../Image/카카오톡.png';
import Naver from '../Image/네이버.png';
import Novelist from '../Image/image 1.png';
import {REST_API_KEY, REDIRECT_URI} from './KakaoLogin';
import {useLocation, useNavigate} from 'react-router-dom';


class Loginpage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           
            <div>
                
                <Text />
                <Kakao />
            </div>
            
            
        )
    }
}

function KakaoLogin()
{
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split('=')[1];

    const getKakaoToken = () => {
        fetch(`https://kauth.kakao.com/oauth/token`, {
            method: 'GET',
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        })
        .then(res => res.sjson())
        .then(data => {
            if(data.access_token){
                localStorage.setItem('token', data.access_token);

            }else {
                navigate('/');
            }
        });
    };

    /*useEffect(() => {
        if(!location.search) return;
        getKakaoToken();
    }, []);*/

    return <div>KakaoLogin</div>
}


class Kakao extends React.Component {


      render(){

       const Login = () => {
            const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
            window.location.href = KAKAO_AUTH_URL;
             }

       
        return(
            <div style={{marginTop: "300px", marginLeft: "850px"}}>
            <button onClick={Login}>
                 <p>카카오로 로그인</p>
            </button>
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
            </div>
        )
    }
    
}


export default Loginpage;