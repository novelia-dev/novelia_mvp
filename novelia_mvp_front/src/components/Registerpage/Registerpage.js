import React from 'react';
function activeButton(){
    alert("확인완료");
    window.location.href="/register2";
}
function cancel(){
    alert("취소");
    window.location.href="/";
}
function Registerpage (){
    
    const style={
    'width':"588px",
    'height':"379px",
    'margin-top':"351px",
    'margin-left':"666px",
    'Font-family':"Roboto",
    'Font-style':"Regular",
    'Font-size':"19px",
    'line-height':"22px",
    'text-align':"left",
    'border-color': "#000000",
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
    'font-weight': 400,
    'font-size': "16px",
    'line-height': "18.75px",
    'color': "#FFFFFF",
    'background-color':"#AA0140",
    
};
    const style7={
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
    'font-weight': 400,
    'font-size': "16px",
    'line-height': "18.75px",
    'color': "#FFFFFF",
    'background-color':"#AA0140",
};
    return(
    <div>
    <div>
        <table style={style}>
                    <th>회원가입</th>
                    
                    <tr>
                    <td><input type="checkbox"/><label>전체 약관 동의</label></td>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/><label>이용약관 동의</label></td><button>내용보기</button>
                    </tr>
                    <tr>
                    <td><input type="checkbox"/><label>개인정보 수집 및 이용동의</label></td><button>내용보기</button>
                    </tr>
                    <tr>
                    <td><botton style={style6} onClick={cancel}> 취소</botton></td>
                    <td><botton style={style7} onClick={activeButton}> 다음</botton></td>
                    </tr>
        </table>
       </div>
</div>
    );
}


export default Registerpage;