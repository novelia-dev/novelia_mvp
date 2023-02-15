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
                <h5>주관식 피드백</h5>
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
                <h5>좋았던 점</h5>
            </div>
            <div>
                <input type="text" placeholder="300자 이상 입력해주세요. 작가분들께 직접 전달되는 피드백 입니다. 높임말을 사용해주세요. 욕설, 비난, 조롱의 경우 서비스 이용 제제 사유 입니다."></input>
            </div>
            <div>
                <h5>아쉬웠던 점</h5>
            </div>
            <div>
                <input type="text" placeholder="300자 이상 입력해주세요. 작가분들께 직접 전달되는 피드백 입니다. 높임말을 사용해주세요. 욕설, 비난, 조롱의 경우 서비스 이용 제제 사유 입니다."></input>
            </div>
            <div>
                <button onClick={Click}>제출하기</button>
            </div>
        </div>
    )
}

export default Choose;