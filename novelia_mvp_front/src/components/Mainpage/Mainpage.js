import React,{useEffect,useState} from 'react'
import Banner from '../Image/imageslider1.png';
import Pagination from "./Pagination";
import Posts from "./Posts";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import ImageSlider, {Slide} from 'react-auto-image-slider';

import sub from '../Image/imageslider1.png';


function Mainpage(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  /* 새로 추가한 부분 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
    console.log(posts);
    return(
        <div>
          <Navbar/>
          <div style={{marginLeft:"360px"}}>   
            <ImageSlider effectDelay={500} autoDelay={2000}>
                <Slide>
                    <img alt="img1" style={{width:"1200px",height:"270px"}} src={Banner} />
                </Slide>
                <Slide>
                    <img alt="img2" style={{width:"1200px",height:"270px"}} src={sub} />
                </Slide>
            </ImageSlider>
        </div>

           <div style={{marginTop: "300px", marginLeft: "928px"}} >
            <Posts posts={currentPosts(posts)} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
        </div>
        <Footer/>
        </div>
        
    );
}


export default Mainpage;