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

    const handleSubmit = (e) => {
        e.preventDefault();

        var datatoSubmit = {
            title: title,
            genre: genre,
            tags: tag,
            content: content
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
        <div><FileUpload refreshFunction={updateImage} /></div>
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

