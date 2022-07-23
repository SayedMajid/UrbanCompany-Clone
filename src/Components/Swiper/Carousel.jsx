import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Image, Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Swiper/styles.css";

export default function Carousel() {
  const imgArr = [
    "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657006546486-545754.jpeg",
    "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733512041-813a4c.jpeg",
    "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733511465-f22ed1.jpeg",
    "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733505075-80d1ba.jpeg",
    "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733505585-4d3fe3.jpeg",
  ];

  return (
    <div className="App" style={{ width: "75%", margin: "auto" }}>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={20}
        className="external-buttons"
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
      >
        {imgArr.map((el) => (
          <SwiperSlide>
            <Box
              transition="transform .2s"
              _hover={{ transform: "scale(1.10)" }}
              h="200px"
            >
              <Image src={el} alt="" />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
