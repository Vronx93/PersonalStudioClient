import useWindowWidth from "../../hooks/useWindowWidth";
import { stepToSuccessInterface } from "../../interfaces";
import SmallDropdownList from "../SmallDropdownList/SmallDropdownList";
import styles from "./StepsToSuccessListElement.module.css";

export default function StepsToSuccessListElement({
  stepElement,
}: {
  stepElement: stepToSuccessInterface;
}) {
  const width = useWindowWidth();

  if (width < 960) {
    return (
      <li className={styles.container}>
        <div className={styles.titleWrapper}>
          <span className={styles.index}>
            {/* adds 0 before digit if number is less than 10 */}
            {stepElement.index < 10 && 0}
            {stepElement.index}
          </span>
          <img
            className={styles.img}
            src={stepElement.imgUrl}
            alt={`Ikona przedstawiająca punkt ${stepElement.title}`}
          />
          {/* <h3 className={styles.title}>{stepElement.title}</h3> */}
        </div>
        <SmallDropdownList
          title={stepElement.title}
          listItems={[stepElement.textContent]}
          containerStyle={styles.dropdownItemContainer}
          listStyle={styles.textContainer}
        />
      </li>
    );
  }

  return (
    <li className={styles.container}>
      <span className={styles.index}>
        {/* adds 0 before digit if number is less than 10 */}
        {stepElement.index < 10 && 0}
        {stepElement.index}
      </span>
      <div className={styles.titleWrapper}>
        <img
          className={styles.img}
          src={stepElement.imgUrl}
          alt={`Ikona przedstawiająca punkt ${stepElement.title}`}
        />
        <h3 className={styles.title}>{stepElement.title}</h3>
      </div>
      <p className={styles.textContent}>{stepElement.textContent}</p>
    </li>
  );
}
