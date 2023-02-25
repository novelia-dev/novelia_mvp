import React,{useState,useEffect} from 'react'
import ImageSlider, {Slide} from 'react-auto-image-slider';
import main from '../Image/image 49.png';
import sub from '../Image/image 1.png';
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
            <ImageSlider effectDelay={500} autoDelay={2000}>
                <Slide>
                    <img alt="img1" src={main} style={{width: "1200px" , height:"270px"}} />
                </Slide>
                <Slide>
                    <img alt="img2" src={sub} style={{width: "1200px" , height: "270px"}} />
                </Slide>
            </ImageSlider>
        </div>
        <div style={{marginTop:"30px", marginLeft:"928px"}}>
            <Posts posts={currentPosts(posts)} loading={loading}></Posts>
            <Pagination>
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={setCurrentPage}
            </Pagination>
        </div>
        </div>
    );
}
export default Mainpage;