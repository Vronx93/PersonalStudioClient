import TransformationElement from "../TransformationElement/TransformationElement";
import { GetTransformationData } from "../../interfaces";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./TransformationList.module.css";
import { Pagination, Navigation } from "swiper/modules";

export default function TransformationList({
  transformationList,
}: {
  transformationList: GetTransformationData[];
}) {
  const width = useWindowWidth();

  if (transformationList.length < 1) {
    return <p>Brak transformacji do wyświetlenia.</p>;
  }

  return (
    <>
      <Swiper
        loop
        spaceBetween={50}
        slidesPerView={width < 740 ? 1 : transformationList.length > 2 ? 3 : 1}
        centeredSlides={true}
        centeredSlidesBounds={true}
        freeMode={true}
        initialSlide={0}
        centerInsufficientSlides={true}
        className={styles.swiper}
        grabCursor
        navigation
        modules={[Pagination, Navigation]}
      >
        {transformationList.map((listItem, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <TransformationElement
              imgBefore={listItem.imageBefore}
              imgAfter={listItem.imageAfter}
              name={listItem.name}
              age={listItem.yearsOld}
              weightLost={listItem.lostWeight}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
