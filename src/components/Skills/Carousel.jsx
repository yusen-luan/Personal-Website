import reactImg from "../../assets/reactImg.png";
import figmaImg from "../../assets/figmaImg.png";
import pythonImg from "../../assets/pythonImg.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const settings = {
        dots: true,             // Show navigation dots
        infinite: true,         // Infinite loop sliding
        speed: 500,            // Transition speed in ms
        slidesToShow: 3,        // Number of slides visible at once
        slidesToScroll: 1,      // Slides to scroll per action
        autoplay: true,         // Enable auto play
        autoplaySpeed: 4000,    // Auto play speed in ms
        arrows: true,           // Show left/right arrows
    };

    return (
        <div style={{ width: "80%", margin: "auto" }}>
          <Slider {...settings}>
            <div className="item">
                <img src={reactImg} alt="Image" className="item-img"/>
                <h5>Front-end development</h5>
            </div>
            <div className="item">
                <img src={figmaImg} alt="Image" className="item-img"/>
                <h5>UI/UX Design</h5>
            </div>
            <div className="item">
                <img src={pythonImg} alt="Image" className="item-img"/>
                <h5>Back-end development</h5>
            </div>
          </Slider>
        </div>
      );
}

export default Carousel