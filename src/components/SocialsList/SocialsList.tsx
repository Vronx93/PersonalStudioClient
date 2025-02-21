import SocialsListElement from "../SocialsListElement/SocialsListElement";
import styles from "./SocialsList.module.css";
import youtubeImg from "../../assets/images/youtube.png";
import instagramImg from "../../assets/images/insta-icon.png";
import facebookImg from "../../assets/images/facebook.png";

export default function SocialsList() {
  const socialsList = [
    {
      name: "Youtube",
      imgUrl: youtubeImg,
      text: "StudioKalisteniki",
      profileUrl: "youtube.com",
    },
    {
      name: "Instagram",
      imgUrl: instagramImg,
      text: "Studio.Kalisteniki",
      profileUrl: "instagram.com",
    },
    {
      name: "Facebook",
      imgUrl: facebookImg,
      text: "Studio.Kalisteniki",
      profileUrl: "facebook.com",
    },
  ];

  return (
    <ul className={styles.list}>
      {socialsList.map((listElement) => (
        <SocialsListElement
          key={crypto.randomUUID()}
          name={listElement.name}
          imgUrl={listElement.imgUrl}
          text={listElement.text}
          profileUrl={listElement.profileUrl}
        />
      ))}
    </ul>
  );
}
