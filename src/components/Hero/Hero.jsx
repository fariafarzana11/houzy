
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Hero.css';


const Hero = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://www.buildofy.com/blog/content/images/2022/06/_DSC9610-Edited_-min.jpg" alt="" className='h-[600px] w-[1300px]' /></SwiperSlide>
                <SwiperSlide><img src="https://www.southernliving.com/thmb/R50HDhYdsNA9mQKzE9zFenYcA4M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2270901_cainc0259_1-2000-36b6699219454ee298de1d4565f1ab7d.jpg" alt="" className='h-[600px] w-[1300px]' /></SwiperSlide>
                <SwiperSlide><img src="https://landmarkhomes.sgp1.digitaloceanspaces.com/images/tongariro/Tongariro-2020.JPG" alt="" className='h-[600px] w-[1300px]' /></SwiperSlide>
                <SwiperSlide><img src="https://www.nobroker.in/blog/wp-content/uploads/2024/03/best-low-budget-simple-house-design.webp" alt="" className='h-[600px] w-[1300px]' /></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Hero;