import { useLayoutEffect, useState } from "react";
import { OnlinePlanGetOptionInterface } from "../../interfaces";
import AdminOnlineOptionsListElement from "../AdminOnlineOptionsListElement/AdminOnlineOptionsListElement";
import styles from "./AdminOnlineOptionsList.module.css";
import { useQueryClient } from "@tanstack/react-query";

export default function AdminOnlineOptionsList({
  options,
}: {
  options: OnlinePlanGetOptionInterface[];
}) {
  const [optionsList, setOptionsList] = useState(options);
  const queryClient = useQueryClient();
  function deleteFn(optionName: string) {
    setOptionsList((prevList) =>
      prevList.filter((option) => option.name !== optionName)
    );
    queryClient.invalidateQueries({
      queryKey: ["onlineOptions"],
    });
  }
  useLayoutEffect(() => {
    setOptionsList(options);
  }, [options]);

  return (
    <ul className={styles.container}>
      {optionsList.map((option) => (
        <AdminOnlineOptionsListElement
          option={option}
          key={crypto.randomUUID()}
          deleteFn={deleteFn}
        />
      ))}
    </ul>
  );
}
