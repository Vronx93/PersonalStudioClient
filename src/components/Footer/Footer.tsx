import styles from "./Footer.module.css";
import { chunkArray } from "./Footer.utils";
import { Link, useLocation } from "react-router-dom";
import pushupsImg from "../../assets/images/pushups.png";
import pullupsImg from "../../assets/images/pullups.png";
import SmallDropdownList from "../SmallDropdownList/SmallDropdownList";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function Footer() {
  const width = useWindowWidth();
  const location = useLocation().pathname;

  const footerLinks = [
    {
      title: "Oferta",
      url: "/shop/trainings",
      menu: true,
    },
    {
      title: "Trenerzy",
      url: "/coaches",
      menu: true,
    },
    {
      title: "Studio",
      url: "/studio",
      menu: true,
    },
    {
      title: "O mnie",
      url: "/about",
      menu: true,
    },
    {
      title: "Kontakt",
      url: "/contact",
      menu: true,
    },
    {
      title: "Metody płatności",
      url: "#",
      payments: true,
    },
    {
      title: "Dostawa",
      url: "#",
      payments: true,
    },
    {
      title: "Polityka prywatności",
      url: "privacy-policy",
      payments: true,
    },
    {
      title: "Opinie klientów",
      url: "/#reviews",
      menu: true,
    },
    {
      title: "Youtube",
      url: "youtube.com",
      socialMedia: true,
    },
    {
      title: "Instagram",
      url: "instagram.com",
      socialMedia: true,
    },
    {
      title: "Facebook",
      url: "facebook.com",
      socialMedia: true,
    },
    {
      title: "WhatsApp",
      url: "#",
      socialMedia: true,
    },
  ];

  if (width < 1140) {
    const menuLinks = footerLinks.filter((link) => link.menu);
    const menuLinkList = menuLinks.map((link) => (
      <li key={crypto.randomUUID()}>
        <Link to={link.url}>{link.title}</Link>
      </li>
    ));
    const paymentLinks = footerLinks.filter((link) => link.payments);
    const paymentLinksList = paymentLinks.map((link) => (
      <li key={crypto.randomUUID()}>
        <Link to={link.url}>{link.title}</Link>
      </li>
    ));
    const contactLinks = footerLinks.filter((link) => link.socialMedia);
    const contactLinkList = contactLinks.map((link) => (
      <li key={crypto.randomUUID()}>
        <Link to={link.url}>{link.title}</Link>
      </li>
    ));
    const phone = (
      <li key={crypto.randomUUID()}>
        <a
          className={styles.phoneNumber}
          href={`tel:${import.meta.env.VITE_REACT_APP_PHONE_HTML}`}
        >
          <p>Tel: {import.meta.env.VITE_REACT_APP_PHONE}</p>
        </a>
      </li>
    );
    const email = (
      <li key={crypto.randomUUID()}>
        <a
          className={styles.phoneNumber}
          href={`mailto:${import.meta.env.VITE_REACT_APP_EMAIL}`}
        >
          <p>{import.meta.env.VITE_REACT_APP_EMAIL}</p>
        </a>
      </li>
    );
    return (
      <footer
        className={`${styles.mobileContainer} ${
          location === "/checkout" && styles.hidden
        }`}
      >
        <img className={styles.pushups} src={pushupsImg} alt="" />
        <SmallDropdownList
          listStyle={styles.mobileList}
          title={"Menu"}
          listItemsElements={menuLinkList}
        />
        <SmallDropdownList
          listStyle={styles.mobileList}
          title={"Zamówienia i płatności"}
          listItemsElements={paymentLinksList}
        />
        <SmallDropdownList
          listStyle={styles.mobileList}
          title={"Kontakt"}
          listItemsElements={[...contactLinkList, phone, email]}
        />
      </footer>
    );
  }

  // desktop

  const links = footerLinks.map((link) => (
    <li key={crypto.randomUUID()}>
      <Link to={link.url}>{link.title}</Link>
    </li>
  ));

  const chunkedLinkElementsList = chunkArray(links as [], 5);

  const renderElements = chunkedLinkElementsList.map((element) => (
    <ul className={styles.chunkedList} key={crypto.randomUUID()}>
      {element}
    </ul>
  ));

  return (
    <footer className={styles.container}>
      <img className={styles.pushups} src={pushupsImg} alt="" />
      <img className={styles.pullups} src={pullupsImg} alt="" />
      <section className={styles.linksWrapper}>{renderElements}</section>
      <article className={styles.contact}>
        <header className={styles.header}>
          <h3>Masz pytania?</h3>
          <p>Skontaktuj się ze mną.</p>
        </header>
        <small className={styles.small}>
          <a
            href={`tel:${import.meta.env.VITE_REACT_APP_PHONE_HTML}`}
            className={styles.contactLink}
          >
            <p className={styles.phoneNumber}>
              Tel: {import.meta.env.VITE_REACT_APP_PHONE}
            </p>
          </a>
          <br />
          <a
            className={styles.contactLink}
            href={`mailto:${import.meta.env.VITE_REACT_APP_EMAIL}`}
          >
            <p className={styles.phoneNumber}>
              {import.meta.env.VITE_REACT_APP_EMAIL}
            </p>
          </a>
        </small>
      </article>
    </footer>
  );
}
