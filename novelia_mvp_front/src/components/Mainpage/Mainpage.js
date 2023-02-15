import React,{useState,useEffect} from 'react'
import main from '../Image/image 49.png';
import Pagination from "./Pagination";
import Posts from "./Post";
import axios from "axios";

function Mainpage(){

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(()=>{
        const fetchData = async() =>{
            setLoading(true);
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(response.data);
            setLoading(false);
        };
        fetchData();
    },[]);

    console.log(posts);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };

    return (
        <div>
        <div>
            <img src ={main} alt="배너" style={{width:"1200px",height:"270px",top:"150px",left:"360px",position:"absolute"}}/>
        </div>
        <div style={{marginTop:"500px", marginLeft:"360px"}}>
            <Posts posts={currentPosts(posts)} loading={loading}></Posts>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={setCurrentPage}
            ></Pagination>
        </div>
        </div>
    );
}
export default Mainpage;