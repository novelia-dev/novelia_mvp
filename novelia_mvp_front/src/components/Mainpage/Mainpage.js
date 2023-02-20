import React,{useState,useEffect} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, EffectFade, Navigation, Pagination as Page} from "swiper";
import main from '../Image/image 49.png';
import sub from '../Image/image 1.png';
import Pagination from "./Pagination";
import Posts from "./Post";
import axios from "axios";
import './Mainpage.css';

function Mainpage(){

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const items =[
        {src: main},
        {src: sub},
    ];

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
            <Swiper effect={"fade"} autoplay={{delay:3000, disableOnInteraction: false,}}
              pagination ={{clickable: true,}}
              modules= {[Navigation, EffectFade, Page, Autoplay]}
              className = "mySwiper"
              loop={true}
            >
            {items.map((item, idx)=> {
                return(
                    <SwiperSlide key={idx}>
                        <img src={item.src} />
                    </SwiperSlide>
                );
            })}
            </Swiper>
            {/*<img src ={main} alt="배너" style={{width:"1200px",height:"270px",top:"150px",left:"360px",position:"absolute"}}/>*/}
        </div>
        <div style={{marginTop:"300px", marginLeft:"928px"}}>
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