import React from "react";

function movetofourth(){
    window.location.href="/text/4";
}

function RegisterText5(){
    return(
        <div>
            <div><h3>3화등록</h3></div>
            <div><h5>3화 내용을 입력해주세요.</h5></div>
            <div><h5>에피소드 제목</h5></div>
            <div><input type="text" placeholder="15자 이내" /></div>
            <div><h5>본문 입력</h5></div>
            <div><input type="text" placeholder="5000자 이내 \n 잠깐! 아직 성인 컨텐츠는 등록할 수 없습니다. 명심해주세요." /></div>
            <div><button onClick={movetofourth}>다음</button></div>
            </div>
    );
}

export default RegisterText5;