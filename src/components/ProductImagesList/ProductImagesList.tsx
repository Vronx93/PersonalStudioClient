import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import arrowLeft from "../../assets/images/arrow-back.png";
import Img from "../Img/Img";
import { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import styles from "./ProductImagesList.module.css";

export default function ProductImagesList({
  images,
}: {
  images: { imageId: string; isPrimary: boolean }[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const width = useWindowWidth();
  const navigate = useNavigate();
  const imagesSetUp = useCallback(() => {
    const primary = images.find((image) => image.isPrimary === true);
    const nonPrimaryList = images.filter((image) => image.isPrimary === false);
    if (primary) {
      return [primary, ...nonPrimaryList];
    }
    return nonPrimaryList;
  }, [images]);
  const mainElements = useMemo(() => {
    return imagesSetUp().map((img) => (
      <SwiperSlide
        className={styles.primaryImgWrapper}
        key={crypto.randomUUID()}
      >
        <Img
          className={styles.primaryImg}
          imgId={img.imageId}
          id={img.imageId}
          alt={"Zdjęcie przedmiotu."}
        />
      </SwiperSlide>
    ));
  }, [images]);

  const sideElements = useMemo(() => {
    return imagesSetUp().map((img) => (
      <SwiperSlide className={styles.sideImgWrapper} key={crypto.randomUUID()}>
        <Img
          className={styles.sideImg}
          imgId={img.imageId}
          id={img.imageId}
          alt={"Zdjęcie przedmiotu."}
        />
      </SwiperSlide>
    ));
  }, [images]);

  if (mainElements.length < 1) {
    return <p>Brak zdjęć do wyświetlenia.</p>;
  }

  return (
    <section className={styles.container}>
      {width < 990 && (
        <span className={styles.back} onClick={() => navigate(-1)}>
          <img src={arrowLeft} alt="Wstecz." /> Wstecz
        </span>
      )}
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`mySwiper ${styles.mainSwiper} ${styles.mySwiper}`}
        grabCursor
      >
        {mainElements.length > 0 && mainElements}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={width > 415 ? 4 : 3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.sideSwiper}
        grabCursor
      >
        {sideElements.length > 0 && sideElements}
      </Swiper>
    </section>
  );
}
