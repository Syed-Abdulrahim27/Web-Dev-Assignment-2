import Header from "./header";
import Banner from "./Banner";
import VideoSection from "./Vid-Sec-Area";
import StartMenuArea from "./Start-Menu-Area";
import GalleryArea from "./Galleryarea";
import ReviewArea from "./Reviewarea";
import BlogArea from "./Blogarea";
import FooterArea from "./Footerarea";
import "./css/linearicons.css";
import "./css/font-awesome.min.css";
import "./css/bootstrap.css";
import "./css/magnific-popup.css";
import "./css/nice-select.css";
import "./css/animate.min.css";
import "./css/owl.carousel.css";
import "./css/main.css";
function App() {
  return (
    <>
      <Header />;
      <Banner />;
      <VideoSection />;
      <StartMenuArea />;
      <GalleryArea />;
      <ReviewArea />;
      <BlogArea />;
      <FooterArea />;
    </>
  );
}

export default App;
