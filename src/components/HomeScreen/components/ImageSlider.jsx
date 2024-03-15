import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
function ImageBanner({ banners }) {
  const [isDesktop, setIsDesktop] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (window) {
      setIsDesktop(window && window?.innerWidth > 768 ? true : false);
    }
  }, [router, router.isReady]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    
  };
  return (
    <Slider {...settings} >
      {banners?.map((banner) => (
        <div
          style={{
            width: "100%",
            height: isDesktop ? "100vh" : "40vh",
            background: "#000",
          }}>
          <img
            style={{
              objectFit: "fill",
              width: "100%",
              height: isDesktop ? "100vh" : "40vh",
            }}
            height={"100%"}
            width='100%'
            src={banner.url}
          />
        </div>
      ))}
    </Slider>
  );
}

export default ImageBanner;
