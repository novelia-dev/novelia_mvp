import React from 'react';

class Registerpage extends React.Component{
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
class Text extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        function activeButton(){
            alert("확인완료"); }
            const style1={
                'position':'absolute',
                'margin-top': "-9px",
                'margin-left': "669px",
            }
        const style={
            'width':"70px",
            'height':"379px",
            'margin-top':"366px",
            'margin-left':"681px",
            'Font-family':"Roboto",
            'Font-style':"Regular",
            'Font-size':"19px",
            'line-height':"22px",
            'text-align':"left",
            'color':"#000000",

        };
        const style6={
            'box-sizing':"boreder-box",
            'display': "flex",
            'justify-content':"center",
            'align-items': "center",
            'gap':"10px",
            'width':"102px",
            'height':"41.57px",
            'position':"absoulte",
            'borderRadius': "4px",
            'font-family': "Roboto",
            'top':"-20px",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "18.75px",
            
            
            'color': "#FFFFFF",
            'background-color':"#AA0140",
            
        };const style7={
            'box-sizing':"boreder-box",
            'display': "flex",
            'justify-content':"center",
            'align-items': "center",
            'gap':"10px",
            'width':"102px",
            'height':"41.57px",
            'position':"absoulte",
            'borderRadius': "4px",
            'font-family': "Roboto",
            'top':"-20px",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "18.75px",
            
            
            'color': "#FFFFFF",
            'background-color':"#AA0140",
            
        };

     return(
        <div>
        <div style ={style}>
            <h5>회원가입</h5>
        
        </div>
       <div>
        
        <table>
                    <tr>
                    <td><input type="checkbox"/><label>전체 약관 동의</label></td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/><label>이용약관 동의</label></td><button>내용보기</button>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/><label>개인정보 수집 및 이용동의</label></td><button>내용보기</button>
                    </tr>
        </table>
       </div>
       
       <div>
        <botton style={style6} onClick={activeButton} > 취소</botton>
        <botton style={style7} onClick={activeButton}> 다음</botton>
        </div>
    
        </div>
        
     )
    }
}


export default Registerpage;
