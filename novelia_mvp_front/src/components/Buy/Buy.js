import React from "react";

function Click(){
    alert('정상입금 확인 후 열람권한이 부여됩니다. 1일 안에 처리됩니다.');
}

function Buy(){
    return(
        <div>
        <div>
            <h3>열람권 구매</h3>
        </div>
        <div>
            <h5>피드백을 열람하기 위해 열람권을 구매하세요.</h5>
        </div>
            <table>
                <tr>
                    <td><h3>상품명 &nbsp;</h3></td>
                    <td style={{background:"black"}}><h3 style={{color:"white"}}>입금계좌</h3></td>
                </tr>
                <tr>
                    <td><h5>"작품제목제목제목제목제목제목"에 대한 "노벨리에 1+1 세트" &nbsp;</h5></td>
                    <td style={{background: "black"}}><h5 style={{color:"white"}}>하나은행@@@@@@@@@@@@@</h5></td>
                </tr>
                <tr>
                    <table>
                        <tr>
                            <td><h3>쿠폰</h3></td>
                        </tr>
                        <tr>
                            <td>쿠폰명</td><td>쿠폰내용</td>
                        </tr>
                    </table>
                </tr>
                <tr>
                    <h3>최종 결제 금액</h3>
                    <table>
                        <tr><td>상품가격</td><td>할인가</td><td>최종가격</td></tr>
                        <tr><td>55,000</td><td>1,000</td><td>54,000</td></tr>
                    </table>
                </tr>
                <tr>
                    <table>
                        <tr><h3>입금자명</h3></tr>
                        <tr><td><input type="text" placeholder="플레이스 홀더" /></td><td><button onClick={Click}>입금완료</button></td></tr>
                    </table>
                </tr>
            </table>
        </div>
    )
}

export default Buy;