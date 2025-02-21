import { useState } from "react";
import styles from "./SmallDropdownList.module.css";
import arrowDownImg from "../../assets/images/arrow-down.png";
import orangeArrowDownImg from "../../assets/images/orange-arrow-dropdown-down.png";

interface SmallDropdownListProps {
  title: string;
  listItems?: string[];
  listItemsElements?: JSX.Element[];
  titleStyle?: string;
  listStyle?: string;
  containerStyle?: string;
  orangeArrow?: boolean;
  isOpen?: boolean;
}

export default function SmallDropdownList({
  title,
  listItems,
  listItemsElements,
  titleStyle,
  listStyle,
  containerStyle,
  orangeArrow,
  isOpen,
}: SmallDropdownListProps) {
  const [isActive, setIsActive] = useState(isOpen ?? false);
  const titleStyles = titleStyle ?? styles.smallTitle;
  const listStyles = listStyle ?? styles.list;

  //   if (!listItemsElements && listItems) {
  //     const renderListItems = listItems.map((listItem) => {
  //       return <li key={crypto.randomUUID()}>{listItem}</li>;
  //     });
  //     return renderListItems;
  //   }

  return (
    <article className={`${styles.container} ${containerStyle}`}>
      <div
        tabIndex={0}
        onClick={() => setIsActive(!isActive)}
        className={styles.titleWithArrow}
      >
        <h4 className={titleStyles}>{title}:</h4>
        <img
          className={isActive ? styles.arrowUp : styles.arrowDown}
          src={orangeArrow ? orangeArrowDownImg : arrowDownImg}
          alt="Strzałka w dół"
        />
      </div>
      {isActive && (
        <ul className={listStyles}>
          {!listItemsElements && listItems
            ? listItems.map((listItem) => {
                return <li key={crypto.randomUUID()}>{listItem}</li>;
              })
            : listItemsElements && listItemsElements}
        </ul>
      )}
    </article>
  );
}
