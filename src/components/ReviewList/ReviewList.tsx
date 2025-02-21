import styles from "./ReviewList.module.css";
import ReviewElement from "../ReviewElement/ReviewElement";
import weightBackgroundImg from "../../assets/images/weight-background.png";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export interface review {
  imgUrl: string;
  rate: number;
  reviewText: string;
  username: string;
}

export interface ReviewListProps {
  reviews: review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const location = useLocation();
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const width = useWindowWidth();

  useEffect(() => {
    if (reviewsRef.current && location.hash === "#reviews") {
      reviewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  if (reviews.length < 1) {
    return <p>Brak opinii do wyświetlenia.</p>;
  }

  return (
    <section ref={reviewsRef} className={styles.container}>
      <img
        className={styles.weightBackground}
        src={weightBackgroundImg}
        alt=""
      />
      <h2 className={styles.title}>
        <span className={styles.fancyText}>Opinie</span> podopiecznych o naszych
        ofertach
      </h2>
      <Swiper
        loop
        spaceBetween={50}
        slidesPerView={width < 740 ? 1 : reviews.length > 2 ? 3 : 1}
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
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <ReviewElement
              key={`${review.username}${index}`}
              reviewData={review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
