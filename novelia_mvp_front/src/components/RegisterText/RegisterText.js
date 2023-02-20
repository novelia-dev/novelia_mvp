import React,{useState, Component} from "react";
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

    const updateImage = (Images) => {
        setImages(Images)
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
        <label>제목*</label><input id="title"type="text" placeholder="15자이내" />
        </div>
        <div>
            <select name="장르선택">
                <option value="none" selected disabled hidden>장르선택</option>
                <option value="로맨스">로맨스</option>
                <option value="판타지">판타지</option>
            </select>
        </div>
        <div>
        <table>
           <td><label>태그등록*</label><input type="text" placeholder="최소 2개 이상 입력" /></td> 
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
            <input type ="text" placeholder="500자 이내" />
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
            <button onClick={movetoRegister}>다음</button>
        </div>
        </div>
    )
}

export default RegisterText;

