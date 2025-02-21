import styles from "./PrivacyPolicy.module.css";
import privacyPolicy from "../../assets/json/privacyPolicy.json";
import termsOfService from "../../assets/json/termsOfService.json";
import PrivacyPolicyElement from "../PrivacyPolicyElement/PrivacyPolicyElement";
import exerciseBackground from "../../assets/images/exerciseBackground.png";

export default function PrivacyPolicy() {
  return (
    <>
      <article className={styles.container}>
        <img
          className={styles.exerciseBackground}
          src={exerciseBackground}
          alt=""
        />
        <h1 className={styles.title}>{privacyPolicy.title}</h1>
        <ol className={styles.list}>
          {privacyPolicy.sections.map((section, index) => (
            <PrivacyPolicyElement
              key={crypto.randomUUID()}
              element={section}
              sectionIndex={index + 1}
            />
          ))}
        </ol>
      </article>
      <article className={styles.container}>
        <h1 className={styles.title}>{termsOfService.title}</h1>
        <ol className={styles.list}>
          {termsOfService.sections.map((section, index) => (
            <PrivacyPolicyElement
              key={crypto.randomUUID()}
              element={section}
              sectionIndex={index + 1}
            />
          ))}
        </ol>
      </article>
    </>
  );
}
