import { useMemo } from "react";
import { CoachInterface } from "../../interfaces";
import CoachesListElement from "../CoachesListElement/CoachesListElement";
import styles from "./CoachesList.module.css";

export default function CoachesList({
  listData,
}: {
  listData: CoachInterface[];
}) {
  const renderListElements = useMemo(() => {
    return listData.map((listElement) => (
      <CoachesListElement key={crypto.randomUUID()} listItem={listElement} />
    ));
  }, [listData]);
  return <ul className={styles.container}>{renderListElements}</ul>;
}
