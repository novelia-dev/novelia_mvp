import React from 'react';



class Registerpage2 extends React.Component{
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
            height:"822px",
            'margin-top': "169px",
            'margin-left': "669px",
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

    render(){
        const style={
            'position':'absolute',
            'margin-top': "-9px",
            'margin-left': "669px",
        }
    
    return(
        <div style={style}>
        <div>
            <hr />
        </div>
        <div>
            <h5>조아라 회원 유형을 선택해 주세요</h5>
        </div>
        <div>
            <hr />

        </div>
        <div>
            <table>
                <tr>
                    <td><input type="checkbox"></input> <h5>일반 회원<br/>(14세 이상)</h5></td>
                    <td><input type="checkbox"></input> <h5>어린이 회원<br />(14세 미만)</h5></td>
                </tr>
            </table>
        </div>
        <div>
            <input type="checkbox"></input><label>전체 약관 동의</label>
            <hr />
        </div>
        <div>
            <input type="checkbox"></input><label>이용약관 동의(필수)</label>
            <button>내용보기</button>
        </div>
        <div>
            <input type="checkbox"></input><label>개인정보 수집 및 이용 동의(필수)</label>
            <button>내용보기</button>
        </div>
        <div>
            <input type="checkbox"></input><label>유료작품 게시약관 동의(필수)</label>
            <button>내용보기</button>
        </div>
        <div>
            <input type="checkbox"></input><label>유료이용약관 동의(필수)</label>
            <button>내용보기</button>
        </div>
        <div>
            <label>개인정보 제 3자 제공 동의(선택)</label>
            <button>내용보기</button>
        </div>
        <div>
            <table>
                <tr>
                    <td><h5>(주)핀크럭스애드</h5></td>
                    <td><input type="checkbox"></input><label>동의</label><input type="checkbox"></input><label>비동의</label></td>
                </tr>
            </table>
        </div>
        <div>
            <h5>회원님께서는 조아라 회원제 서비스 이용에 필요한 최소한의 개인 정보 수집 및 이용에 동<br/>의하지 않을 권리가 있으며, 거부 시에는 조아라 회원제 서비스 이용이 제한됩니다.</h5>
        </div>
        <div>
            <input type="checkbox"></input><label>개인정보 수집 및 이용 동의(선택)</label>
            <button>내용보기</button>
        </div>
        <div>
            <button>취소</button>
            <button>다음</button>
        </div>
        </div>
    )
    }
}


export default Registerpage2;