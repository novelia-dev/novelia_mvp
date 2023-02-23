import React from "react";
import aboutlogo from '../Image/about_logo.png';
import aboutlogo2 from '../Image/about_logo2.png';
import aboutlogo3 from '../Image/about_logo3.png';
import aboutlogo4 from '../Image/about_logo4.png';
import aboutlogo5 from '../Image/about_logo5.png';

function About(){
    return(
        <div>
           <div>
              <img src={aboutlogo} alt="설명1" style={{width: '100%'}} />
           </div>
           <div>
             <img src={aboutlogo2} alt="설명2" style={{width:'100%'}} />
           </div>
            <div>
              <img src={aboutlogo3} alt="설명3" style={{width: '100%'}} />
            </div>
            <div>
               <img src={aboutlogo4} alt="설명4" style={{width: '100%'}} />
            </div>
            <div>
               <img src={aboutlogo5} alt ="설명5" style={{width: '100%'}} />
            </div>
        </div>
    )
}

export default About;