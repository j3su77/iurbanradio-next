import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { CarouselDot } from "./CarouselDotButton";

import styles from "./CarouselHome.module.css";

export const CarouselHome = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: false }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

   useEffect(() => {  
       if (embla) { 
         setIsLoading(false)
     }  }, [embla])

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setIsLoading(false)

    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);
  return (
    <>
    <div className={`${styles.container__carousel}`}>
  
      <div className={styles.embla} ref={emblaRef}>
      
          <div className={styles.embla__container}>
          {/*------- ----slide 1---------------*/}
          <div className={styles.embla__slide}>
            <div className={styles["embla__slide__content-img"]}>
              <img src="/carousel-home/oldradio.png" alt="" />
            </div>
            <div  className={styles["embla__slide__content-text"]}>
              <h2 className={styles["embla__slide__text-title"]}>iUrbanRadio </h2>
              <p  className={styles["embla__slide__text-description"]}>
                esto es lo mejor de la radio online esto es lo mejor de la radio
              </p>
            </div>
          </div>

          {/*------- ----slide 2---------------*/}
          <div className={styles.embla__slide}>
            <div className={styles["embla__slide__content-img"]}>
              <img src="/carousel-home/spikerpro.png" alt="" />
            </div>
            <div  className={styles["embla__slide__content-text"]}>
              <h2 className={styles["embla__slide__text-title"]}>iUrbanRadio </h2>
              <p  className={styles["embla__slide__text-description"]}>
                esto es lo mejor de la radio online esto es lo mejor de la radio
              </p>
            </div>
          </div>

          {/*------- ----slide 3---------------*/}
          <div className={styles.embla__slide}>
            <div className={styles["embla__slide__content-img"]}>
              <img src="/carousel-home/fire.png" alt="" />
            </div>
            <div  className={styles["embla__slide__content-text"]}>
              <h2 className={styles["embla__slide__text-title"]}>iUrbanRadio </h2>
              <p  className={styles["embla__slide__text-description"]}>
                esto es lo mejor de la radio online esto es lo mejor de la radio
              </p>
            </div>
          </div>


        </div>
      </div>
    
    </div>

        <div className={styles.embla__container__dots}>
          {scrollSnaps.map((_, index) => (
            <CarouselDot
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        </>
  );
};
