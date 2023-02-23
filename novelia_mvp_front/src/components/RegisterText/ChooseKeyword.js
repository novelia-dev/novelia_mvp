import React,{useState, useRef} from "react";

function inputok(){
    alert('작품 등록이 완료되었습니다!');
}

function ChooseKeyword(){


    const [text, setText] = useState('');
    const [arr, setarr] = useState([]);
    const InputText = (e) => {
        setText(e.target.value);
    }
    const ResetText = () => {
        setText('');
    }

    const handleSubmit = (e) => {
        setarr(arr => [...arr, text]);
        setarr(arr => [...arr,' ']);
        setText('');
    }

    return(
        <div>
            <div>
                <h3>객관식 키워드 등록</h3>
            </div>
            <div>
                <h5>독자들이 고를 수 있는 객관식 키워드를 입력하세요.</h5>
            </div>
            <div>
                <h3>캐릭터</h3>
            </div>
            <div>
              <label>키워드 추가</label><input type="text" onChange={InputText} value={text} placeholder="30자 이내" />
              <button onClick={handleSubmit}>추가</button>
              <button onClick={ResetText}>초기화</button>
            </div>
            <div>
                <b>{arr}</b>
            </div>
            <div>
                <h3>몰입도</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" onChange={InputText} value={text} placeholder="30자 이내" />
            <button onClick ={handleSubmit}>추가</button>
            <button onClick ={ResetText}>초기화</button>
            </div>
            <div>
                <b>{arr}</b>
            </div>
            <div>
                <h3>상업성</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" onChange={InputText} value={text} placeholder="30자 이내" />
            <button onClick={handleSubmit}>추가</button>
            <button onClick={ResetText}>초기화</button>
            </div>
            <div>
                <b>{arr}</b>
            </div>
            <div>
                <h3>기타</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" onChange={InputText} value={text} placeholder="30자 이내" />
            <button onClick={handleSubmit}>추가</button>
            <button onClick={ResetText}>초기화</button>
            </div>
            <div>
                <b>{arr}</b>
            </div>
            <div>
                <button onClick={inputok}>다음</button>
            </div>
        </div>
    )

}

export default ChooseKeyword;