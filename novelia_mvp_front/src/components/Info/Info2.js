import React from 'react';

class Info2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Text />
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
            width:"582px",
            height:"867px",
            'margin-top':"110px",
            'margin-left':"669px",
            'background-color': "#D9D9D9",
        };
        return(
            <div style = {style}>

            </div>
        )
    }
}

class Text extends React.Component{
    constructor(props){
        super(props);
    }
 Chan(){
    alert('변경이 완료되었습니다.');
 }
    render(){
       

        const style ={
          'position':"absolute",
          'top':"90px",
          'left':"669px",
          'Font-family':"Roboto",
          'Font-style':"Regular",
          'Font-size':"16px",
          'line-height':"19px",
          'align':"left",
          'text-align':"left",
          'color':"#666666",
        }
        const style1={
            'position':"absolute",
            'top':"130px",
            'left':"669px",
            'width':"221px",
            'height':"17px",
            'Font-family':"Roboto",
            'Font-weight':400,
            'Font-size':"16px",
            'line-height':"18.75px",
            
        }
        const style2={
            'position':"absolute",
            'top':"160px",
            'left':"669px",
            'width':"Hug",
            'height':"Hug",
            'Font-family':"Roboto",
            'Font-weight':400,
            'Font-size':"16px",
            'line-height':"100%",
            'Vertical-align':"center",
            'text-align':"center",
            'text-color':"#FFFFFF",
        }
        const style3 = {
            'position':"absolute",
            'top':"180px",
            'left':"669px",
            'width':"240px",
            'height':"30px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"100%",
            'Vertical-align':"Center",
        
        }
        const style4 ={
            'position':"absolute",
            'top':"220px",
            'left':"669px",
            'width':"240px",
            'height':"30px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"16px",
            'line-height':"100%",
            'Vertical-align':"Center",
        
        }
        return(
            <div>
            <div style={style}>
                <h5>닉네임*</h5>
            </div>
            <form style={style1}>
                <input type="text"placeholder="한글,영어,숫자 가능"></input>
            </form>
            <button style={style2}>
                중복확인
            </button>
            <select style={style3}>
                <option value="남">남</option>
                <option value="여">여</option>
            </select>
            <select style={style4}>
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대">40대</option>
                <option value="50대">50대이상</option>
            </select>
            <div>
                <h5>이메일*</h5>
            </div>
            <form>
                <input type="email" placeholder="본인인증용 이메일"></input>
            </form>
            <div>
                <h5>선호장르(다중선택 가능)*</h5>
            </div>
            <div>
                <h5>선호소재태그(다중선택 가능)*</h5>
            </div>
            <div>
                <h5>선호인물태그(다중선택 가능)*</h5>
            </div>
            <div>
                <h5>선호문체태그(다중선택 가능)*</h5>
            </div>
            <div>
                <h5>선호기타태그(다중선택 가능)*</h5>
            </div>
            <button>
                변경완료
            </button>
            </div>
        )
    }
}


export default Info2;