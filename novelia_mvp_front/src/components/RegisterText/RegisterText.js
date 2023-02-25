import React,{useState, Component} from "react";
import axios from 'axios';

import Dropzone from "react-dropzone";
function FileUpload(props)
{
    const [Images, setImages] = useState([])

    const dropHandler = (files) => {
        let formData = new FormData();

        const config = {
            header: {'content-type': 'multipart/fomr-data'}
        }

        formData.append("file", files[0])

    }

    const deleteHandler = (image) => {
        const cuurentIndex = Images.indexOf(image);
        let newImages = [...Images]

        newImages.splice(cuurentIndex,1)
        setImages(newImages)
        props.refreshFunction(newImages)

    }
    return(
        <div style={{display:'flex'}}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) =>(
                    <div
                        style={{
                            width: "300px", height: "240px", border: '1px solid lightgrey',
                            display: 'flex', alignItems:'center', justifyContent: 'center'
                        }}
                        {...getRootProps()}>
                            <input {...getInputProps()} />
                            <button>이미지 업로드</button>
                        </div>
                )}
            </Dropzone>
            
            <div style={{display:'flex', width: '350px', height:'240px', overflowX: 'scroll' }}>
                {Images.map((image,index)=> (
                    <div onClick={() => deleteHandler(image)} key={index}>
                        <img style={{minWidth: '300px', width: '300px', height: '240px'}}
                            />
                    </div>
                ))}
            </div>

        </div>
    )
}

function movetoRegister(){
    window.location.href="/text/:text";
}

function RegisterText(props){

    const [Images, setImages] = useState([]);

    const [title,setTitle] =useState("");
    const [genre,setGenre] =useState("");
    const [tag,setTag] =useState("");
    const [content,setContent] =useState("");

    const [question,setQuestion] = useState("");
    const [answer,setAnswer] =useState("");
    const [wrong1,setWrong1] =useState("");
    const [wrong2,setWrong2] = useState("");
 
    const updateTitle = (title) => {
        setTitle(title.target.value);
    }

    const updateGenre = (genre) => {
        setGenre(genre.target.value);
    }

    const updateTag = (tag) => {
        setTag(tag.target.value);
    }

    const updateContent = (content) => {
        setContent(content.target.value);
    }

    const updateImage = (Images) => {
        setImages(Images)
    }

    const updateQuestion = (question) => {
        setQuestion(question.target.value);
    }

    const updateAnswer = (answer) => {
        setAnswer(answer.target.value);
    }

    const updateWrong1 = (wrong1) => {
        setWrong1(wrong1.target.value);
    }

    const updateWrong2 = (wrong2) => {
        setWrong2(wrong2.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !genre || !tag || !content || !question || !answer || !wrong1 || !wrong2)
        {
            alert('모든 항목을 입력하세요.');
        }


        var datatoSubmit = {
            title: title,
            genre: genre,
            tags: tag,
            content: content,
            question: question,
            answer: answer,
            wrong1: wrong1,
            wrong2: wrong2
        };

        axios.post('https://localhost:8000/novel/:id',datatoSubmit)
        .then(response => {
           if(response.data.success){
            alert('저장 성공')
        } else{
            alert('저장 실패')
        }

    })
    .catch((error) => {
        if(error.response){
            console.log(error.response);
            console.log("server refused");
        } else if(error.request){
            console.log("network error");
        } else{
            console.log(error);
        }
    });
}

    return(
        <div>
        <div>
            <h4>작품 기본 정보 입력</h4>
        </div>
        <div>
            <h5>새롭게 피드백 받을 작품의 기본적인 정보를 입력해주세요.</h5>
        </div>
        <div>
            <table>
                <td><FileUpload refreshFunction={updateImage} /></td>
                <td>
                    <label>작품 감상 확인용 질문</label><input type="text" onChange={updateQuestion} placeholder="5화 분량을 읽고 알 수 있는 내용의 질문을 입력하세요. ex) 주인공의 이름? " />
                    <br/>
                    <label>정답</label><input type="text" onChange={updateAnswer} />
                    <br/>
                    <label>오답</label><input type="text" onChange={updateWrong1} />
                    <br/>
                    <label>오답</label><input type="text" onChange={updateWrong2} />
                </td>
            </table>
            
        </div>
        <div>
        <label>제목*</label><input type="text" placeholder="15자이내" onChange={updateTitle} />
        </div>
        <div>
            <select name="장르선택" onChange={updateGenre}>
                <option value="none" selected disabled hidden>장르선택</option>
                <option value="로맨스">로맨스</option>
                <option value="판타지">판타지</option>
            </select>
        </div>
        <div>
        <table>
           <td><label>태그등록*</label><input type="text" placeholder="최소 2개 이상 입력" onChange={updateTag} /></td> 
           <td><label>태그신청</label><input type="text" placeholder="신규태그를 신청하세요" /></td>
        </table>
        
        </div>
        <div>
            <table>
                <td><button>선택태그</button></td>
                <td><button>선택태그</button></td>
                <td><button>선택태그</button></td>
                <td><button>선택태그</button></td>
                <td><button>선택태그</button></td>
                <td><button>선택태그</button></td>
            </table>
        </div>
        <div>
            <label>작품설명</label>
            <input type ="text" placeholder="500자 이내" onChange={updateContent} />
        </div>
        <div>
            <label>샘플 이미지</label>
            <table>
                <td><img alt="샘플이미지1"></img></td>
                <td><img alt="샘플이미지2"></img></td>
                <td><img alt="샘플이미지3"></img></td>
                <td><img alt="샘플이미지4"></img></td>
                <td><img alt="샘플이미지5"></img></td>
                <td><img alt="샘플이미지6"></img></td>
            </table>
        </div>
        <div>
            <button type="primary" onClick={handleSubmit}>저장</button>
            <button onClick={movetoRegister}>다음</button>
        </div>
        </div>
    )
}

export default RegisterText;

