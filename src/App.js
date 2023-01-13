// import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Post from "./pages/posts/Post";
import Recruitment from "./pages/recruitment/Recruitment";
import Culture from "./pages/culture/Culture";
import PostDetail from "./components/postDetail/PostDetail";
import React, { useEffect } from "react";
import IntroHeader from "./components/introHeader/IntroHeader";
import RecruitmentDetail from "./components/recruitmentDetail/RecruitmentDetail";
import VisionAndMisssion from "./components/visionAndMission/VisionAndMisssion";
import Partner from "./components/partner/Partner";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  // const [show, setShow] = useState(true);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route
          path="/recruitment/:recruitmentId"
          element={<RecruitmentDetail />}
        />
        <Route path="/culture" element={<Culture />} />
        <Route path="/introHeader" element={<IntroHeader />} />
        <Route path="/visionAndMission" element={<VisionAndMisssion />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <div>
        <button
          id="myBtn"
          onClick={({scrollTo}) => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <span className="fa-solid fa-angle-up"></span>
        </button>
      </div>
    </>
  );
}

export default App;
