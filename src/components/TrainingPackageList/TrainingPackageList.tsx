import styles from "./TrainingPackageList.module.css";
import TrainingPackageOnline from "../TrainingPackageOnline/TrainingPackageOnline";
import TrainingPackageLive from "../TrainingPackageLive/TrainingPackageLive";
import { OnlinePlanGetOptionInterface } from "../../interfaces";

export default function TrainingPackageList({
  onlineOptions,
}: {
  onlineOptions: OnlinePlanGetOptionInterface[];
}) {
  return (
    <ul className={styles.container}>
      <TrainingPackageOnline options={onlineOptions} />
      <TrainingPackageLive />
    </ul>
  );
}
