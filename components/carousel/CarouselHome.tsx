import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay, Pagination } from 'swiper';

import "swiper/css"
import "swiper/css/effect-fade"
import 'swiper/css/pagination';

import styles from "./CarouselHome.module.css"


SwiperCore.use([Autoplay, Pagination]);


export const CarouselHome = () => {
  return (
    <div className='container'>
      <Swiper
        modules={[EffectFade]}
        navigation
        speed={800}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className={styles.swiper__content}
      >
        <SwiperSlide className={styles.swiperslide}>
          <img src="/carousel-home/fire.png" alt="" />
          <div className={styles["carousel__text-content"]}>
             <div className={styles.carousel__text}>
               <h1 className={styles["carousel__text-title"]}>iUrbanRadio </h1>
               <p className={styles["carousel__text-description"]}>esto es lo mejor de la radio online esto es lo mejor de la radio</p>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="/carousel-home/oldradio.png" alt="" />
          <div className={styles["carousel__text-content"]}>
             <div className={styles.carousel__text}>
               <h1 className={styles["carousel__text-title"]}>iUrbanRadio </h1>
               <p className={styles["carousel__text-description"]}>esto es lo mejor de la radio online</p>
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="/carousel-home/spikerpro.png" alt="" />
          <div className={styles["carousel__text-content"]}>
             <div className={styles.carousel__text}>
               <h1 className={styles["carousel__text-title"]}>iUrbanRadio </h1>
               <p className={styles["carousel__text-description"]}>esto es lo mejor de la radio online</p>
             </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  )
}
