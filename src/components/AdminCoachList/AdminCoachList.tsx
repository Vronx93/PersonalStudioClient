import { useMemo } from "react";
import { CoachInterface } from "../../interfaces";
import AdminCoachListElement from "../AdminCoachListElement/AdminCoachListElement";
import styles from "./AdminCoachList.module.css";
import { deleteCoach } from "../../api/api";
import { useQueryClient } from "@tanstack/react-query";

export default function AdminCoachList({
  coaches,
}: {
  coaches: CoachInterface[];
}) {
  const queryClient = useQueryClient();
  const coachList = useMemo(() => {
    return coaches.map((coach) => (
      <AdminCoachListElement
        coach={coach}
        deleteFn={deleteFn}
        key={crypto.randomUUID()}
      />
    ));
  }, [coaches]);

  async function deleteFn(id: string) {
    await deleteCoach(id);
    coaches.filter((coach) => coach.id !== id);
    queryClient.invalidateQueries({
      queryKey: ["coachesList"],
    });
  }
  return <ul className={styles.container}>{coachList}</ul>;
}
