import { review } from "../ReviewList/ReviewList";
import ReviewStars from "../ReviewStars/ReviewStars";
import styles from "./ReviewElement.module.css";
import googleImg from "../../assets/images/google-icon.png";

// imgUrl: string,
// rate: number,
// reviewText: string,
// username: string,

export default function ReviewElement({ reviewData }: { reviewData: review }) {
  const googleIcon = (
    <img className={styles.googleIcon} src={googleImg} alt="Ikona Google." />
  );

  return (
    <div className={styles.container}>
      <img
        className={styles.profilePicture}
        src={reviewData.imgUrl}
        alt="Zdjęcie profilowe autora komentarza"
      />
      <ReviewStars rate={reviewData.rate} />
      <p className={styles.text}>{reviewData.reviewText}</p>
      <footer className={styles.reviewFooter}>
        <span className={styles.username}>@{reviewData.username}</span>
        <p className={styles.greyText}>
          Opinia z: {googleIcon} <a href="#">Google</a>
        </p>
      </footer>
    </div>
  );
}
