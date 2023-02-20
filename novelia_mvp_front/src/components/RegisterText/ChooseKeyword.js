import React,{useState, useRef} from "react";
import CreateUser from './CreateUser';
import UserList from './UserList';

function inputok(){
    alert('작품 등록이 완료되었습니다!');
}

function ChooseKeyword(){

    const[inputs, setInputs] = useState({
        username: '',
        email: '',
    });

    const {username, email} = inputs;

    const onChange = e => {
        const {name,value} = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
        },
    ]);

    const nextId = useRef(4);

    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        };

        setUsers(users.concat(user));

        setInputs({
            username: '',
            email: '',
        });

        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };
  
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
                <CreateUser username = {username} email = {email} onChange={onChange} onCreate={onCreate} />
                <UserList user={users} onRemove={onRemove} />
            </div>
            <div>
                <h3>몰입도</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" placeholder="30자 이내" />
            </div>
            <div>
                <h3>상업성</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" placeholder="30자 이내" />
            </div>
            <div>
                <h3>기타</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" placeholder="30자 이내" />
            </div>
            <div>
                <button onClick={inputok}>다음</button>
            </div>
        </div>
    )

}

export default ChooseKeyword;