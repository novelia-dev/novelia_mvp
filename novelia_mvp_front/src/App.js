import React, {Suspense} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Mainpage from "./components/Mainpage/Mainpage";
import Loginpage from"./components/Loginpage/Loginpage";
import Registerpage from"./components/Registerpage/Registerpage";
import Registerpage2 from "./components/Registerpage/Registerpage2";
import Registerpage3 from "./components/Registerpage/Registerpage3";
import Registerpage4 from "./components/Registerpage/Registerpage4";
import Footer from "./components/Footer/Footer";
import Registerpage6 from "./components/Registerpage/Registerpage6";
import Readworkpage from "./components/Readworkpage/Readworkpage";
import Readworkpage2 from "./components/Readworkpage/Readworkpage2";
import Readworkpage3 from "./components/Readworkpage/Readworkpage3";
import Quiz from "./components/Quiz/Quiz";
import Notice from "./components/Notice/Notice";
import Notice2 from "./components/Notice/Notice2";
import Ask from "./components/Ask/Ask";
import Tos from "./components/Tos/Tos";
import Privacypolicy from "./components/Privacypolicy/Privacypolicy";
import Choose from "./components/Feedback/Choose";
import Write from "./components/Feedback/Write";
import RegisterText from "./components/RegisterText/RegisterText";
import RegisterText2 from "./components/RegisterText/RegisterText2";
import RegisterText3 from "./components/RegisterText/RegisterText3";
import RegisterText4 from "./components/RegisterText/RegisterText4";
import RegisterText5 from "./components/RegisterText/RegisterText5";
import RegisterText6 from "./components/RegisterText/RegisterText6";
import RegisterText7 from "./components/RegisterText/RegisterText7";
import ChooseKeyword from "./components/RegisterText/ChooseKeyword";
import Hilight from "./components/RegisterText/Hilight";
import FeedSelect from "./components/RegisterText/FeedSelect";
function App() {
  return (
    <Router>
      <Suspense fallback ={<div>Loading...</div>}>
       <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path ="/login" element={<Loginpage />} />
            <Route path ="/register" element={<Registerpage />} />
            <Route path ="/register2" element={<Registerpage2 />} />
            <Route path ="/register3" element={<Registerpage3 />} />
            <Route path ="/register4" element={<Registerpage4 />} />
            <Route path ="/register6" element={<Registerpage6/>}/>
            <Route path ="/read" element={<Readworkpage />} />
            <Route path ="/read2" element={<Readworkpage2 />} />
            <Route path ="/read3" element={<Readworkpage3 />} />
            <Route path ="/quiz" element={<Quiz />} />
            <Route path ="/notice" element={<Notice />} />
            <Route path ="/notice2" element={<Notice2 />} />
            <Route path ="/ask" element={<Ask />} />
            <Route path ="/tos" element={<Tos />} />
            <Route path ="/privacy" element={<Privacypolicy />} />
            <Route path ="/choose" element={<Choose />} />
            <Route path ="/write" element= {<Write />} />
            <Route path ="/text" element= {<RegisterText />} />
            <Route path = "/text/:text" element={<RegisterText2 />}/>
            <Route path = "/text/1" element = {<RegisterText3 />} />
            <Route path = "/text/2" element = {<RegisterText4 />} />
            <Route path = "/text/3" element = {<RegisterText5 />} />
            <Route path = "/text/4" element = {<RegisterText6 />} />
            <Route path = "/text/5" element = {<RegisterText7 />} />
            <Route path = "/choosekeyword" element = {<ChooseKeyword />} />
            <Route path ="/high" element= {<Hilight />} />
            <Route path ="/feed" element= {<FeedSelect />} />
          </Routes>
          
        </div>

        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;