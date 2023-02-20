import React from "react";

function movetoFeed(){
    window.location.href = "/feed";
}


function Hilight(){
    return(
        <div>
            <div>
                <h4>하이라이트 설정</h4>
            </div>
            <div>
                <h5>작품의 일러스트와 함께 보여질 하이라이트를 설정하세요.</h5>
            </div>
            <div>
                <table>
                    <tr>
                    <td><img alt="작품하이라이트" /></td>
                    <td><label>하이라이트</label><input type="text" placeholder="30자이내"/></td>
                    </tr>
                    <tr>
                        <label>샘플이미지</label>
                    </tr>
                    <tr>
                        <td><img alt="샘플이미지1"/></td>
                        <td><img alt="샘플이미지2"/></td>
                        <td><img alt="샘플이미지3"/></td>
                        <td><img alt="샘플이미지4"/></td>                
                    </tr>
                </table> 
            </div>
            <div>
                <button onClick={movetoFeed}>다음</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Hilight;