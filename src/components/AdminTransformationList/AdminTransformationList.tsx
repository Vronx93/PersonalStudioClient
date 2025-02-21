import { useMemo } from "react";
import { GetTransformationData } from "../../interfaces";
import styles from "./AdminTransformationList.module.css";
import AdminTransformationElement from "../AdminTransformationElement/AdminTransformationElement";
import { deleteTransformation } from "../../api/api";
import { useQueryClient } from "@tanstack/react-query";

export default function AdminTransformationList({
  transformationList,
}: {
  transformationList: GetTransformationData[];
}) {
  const queryClient = useQueryClient();
  const renderTransformations = useMemo(() => {
    return transformationList.map((transformationElement) => (
      <AdminTransformationElement
        element={transformationElement}
        deleteFn={handleDelete}
        key={crypto.randomUUID()}
      />
    ));
  }, [transformationList]);

  async function handleDelete(id: string) {
    await deleteTransformation(id);
    queryClient.invalidateQueries({
      queryKey: ["transformationList"],
    });
    return transformationList.filter((element) => element.id !== id);
  }
  return (
    <ul className={styles.container}>
      {transformationList.length > 0 ? (
        renderTransformations
      ) : (
        <div className={styles.container}>
          <p>Tutaj możesz zarządzać transformacjami swoich podopiecznych.</p>
        </div>
      )}
    </ul>
  );
}
