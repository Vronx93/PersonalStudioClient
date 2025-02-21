import styles from "./ContactInfo.module.css";
import emailImg from "../../assets/images/email.png";
import globeImg from "../../assets/images/globe.png";
import locationImg from "../../assets/images/location-pin.png";
import phoneImg from "../../assets/images/phone.png";
import mapImg from "../../assets/images/contact-map.png";
import useWindowWidth from "../../hooks/useWindowWidth";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import pullups from "../../assets/images/pullups2.png";

export default function ContactInfo({
  containerClassName,
}: {
  containerClassName?: string;
}) {
  const width = useWindowWidth();
  const path = useLocation().pathname;
  const emailIcon = (
    <img loading="lazy" src={emailImg} alt="Ikona przedstawiająca kopertę." />
  );
  const globeIcon = (
    <img loading="lazy" src={globeImg} alt="Ikona przedstawiająca globus." />
  );
  const locationIcon = (
    <img
      src={locationImg}
      loading="lazy"
      alt="Ikona przedstawiająca pinezkę lokalizacji."
    />
  );
  const phoneIcon = (
    <img loading="lazy" src={phoneImg} alt="Ikona przedstawiająca telefon." />
  );

  if (width < 960) {
    return (
      <article className={`${styles.mainContainer} ${containerClassName} `}>
        <div className={styles.mobileContainer}>
          <h2 className={styles.title}>
            Zobacz <span className={styles.fancyText}>gdzie</span> jesteśmy!
          </h2>
          <div className={styles.mapImgWrapper}>
            <img
              src={mapImg}
              className={styles.mapImg}
              loading="lazy"
              alt="Mapa przedstawiająca lokalizację studia treningowego i okolic."
            />
          </div>
          <p className={styles.text}>
            Odkryj lokalizację naszego studia treningowego, gdzie każdy
            centymetr przestrzeni jest zaprojektowany z myślą o Twoim komforcie
            i efektywności treningu.
          </p>
          <div className={styles.contactInfoWrapper}>
            <img
              src={pullups}
              alt=""
              className={styles.pullupsBackground}
              loading="lazy"
            />
            <h3 className={styles.pepek}>#NazwaStudia</h3>
            <ul className={styles.contactList}>
              <li>
                {globeIcon}{" "}
                <p>{import.meta.env.VITE_REACT_APP_ADDRESS_CITY_COUNTRY}</p>
              </li>
              <li>
                <a
                  className={styles.phoneNumber}
                  // href="" google maps href
                >
                  {locationIcon}{" "}
                  <p>{import.meta.env.VITE_REACT_APP_ADDRESS_STREET}</p>
                </a>
              </li>
              <li>
                <a
                  className={styles.phoneNumber}
                  href={`tel:${import.meta.env.VITE_REACT_APP_PHONE_HTML}`}
                >
                  {phoneIcon}
                  <p>{import.meta.env.VITE_REACT_APP_PHONE}</p>
                </a>
              </li>
              <li>
                <a
                  className={styles.phoneNumber}
                  href={`mailto:${import.meta.env.VITE_REACT_APP_EMAIL}`}
                >
                  {emailIcon} <p>{import.meta.env.VITE_REACT_APP_EMAIL}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {path != "/studio" && (
          <Button
            link={"/studio"}
            text={"Sprawdź nasze Studio"}
            className={styles.btn}
          />
        )}
      </article>
    );
  }

  return (
    <section className={`${containerClassName} ${styles.mainContainer}`}>
      <div className={styles.container}>
        <div className={styles.mapImgWrapper}>
          <img
            src={mapImg}
            className={styles.mapImg}
            alt="Mapa przedstawiająca lokalizację studia treningowego i okolic."
            loading="lazy"
          />
        </div>
        <div className={styles.textContainer}>
          <img
            loading="lazy"
            src={pullups}
            alt=""
            className={styles.pullupsBackground}
          />
          <h2 className={styles.title}>
            Zobacz <span className={styles.fancyText}>gdzie</span> jesteśmy!
          </h2>
          <p className={styles.text}>
            Odkryj lokalizację naszego studia treningowego, gdzie każdy
            centymetr przestrzeni jest zaprojektowany z myślą o Twoim komforcie
            i efektywności treningu.
          </p>
          <h3 className={styles.pepek}>#StudioKalisteniki</h3>
          <ul className={styles.contactList}>
            <li>
              {globeIcon}{" "}
              <p>{import.meta.env.VITE_REACT_APP_ADDRESS_CITY_COUNTRY}</p>
            </li>
            <li>
              <a
                className={styles.phoneNumber}
                // href="" google maps href
              >
                {locationIcon}{" "}
                <p>{import.meta.env.VITE_REACT_APP_ADDRESS_STREET}</p>
              </a>
            </li>
            <li>
              <a
                className={styles.phoneNumber}
                href={`tel:${import.meta.env.VITE_REACT_APP_PHONE_HTML}`}
              >
                {phoneIcon}
                <p>{import.meta.env.VITE_REACT_APP_PHONE}</p>
              </a>
            </li>
            <li>
              <a
                className={styles.phoneNumber}
                href={`mailto:${import.meta.env.VITE_REACT_APP_EMAIL}`}
              >
                {emailIcon} <p>{import.meta.env.VITE_REACT_APP_EMAIL}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {path != "/studio" && (
        <Button
          link={"/studio"}
          text={"Sprawdź nasze Studio"}
          className={styles.btn}
        />
      )}
    </section>
  );
}
