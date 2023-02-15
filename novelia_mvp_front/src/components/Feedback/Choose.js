import React, {useState} from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa';

const ARRAY = [0,1,2,3,4];


const Stars = styled.div`
    display:flex;
    padding-top: 5px;

    & svg{
        color: gray;
        cursor: pointer;
    }
    
    :hover svg{
        color: #fcc419;

    }

    & svg:hover ~ svg {
        color: gray;
    }
    .yellowStar{
        color: #fadb14;
    }

`;

function Choose(){

    const [Grade, setGrade] = useState([false,false, false, false, false])

    const Click =() =>{
        alert('피드백 참여가 완료되었습니다.');
    }

    return(
        <div>
            <div>
                <h5>작품 제목</h5>
            </div>
            <div>
                <h5>객관식 피드백</h5>
            </div>
            <div>
                <h5>별점</h5>
            </div>
            <div>
                <Stars>
                    {ARRAY.map((el,idx) => {
                        return(
                            <FaStar key={idx} size="50"
                              className={Grade[el] && 'yellowStar'} />
                        );
                    })}
                </Stars>
            </div>
            <div>
                <h5>캐릭터</h5>
            </div>
            <div>
                <table>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <h5>몰입도</h5>
            </div>
            <div>
                <table>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <h5>상업성</h5>
            </div>
            <div>
                <table>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <h5>기타</h5>
            </div>
            <div>
                <table>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>1</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <button onClick={Click}>제출하기</button>
            </div>
        </div>
    )
}

export default Choose;