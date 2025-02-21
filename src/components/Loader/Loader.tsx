import styles from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({ color }: { color?: string }) {
  return (
    <div className={styles.container}>
      <ClipLoader
        color={color ?? "rgb(0,0,0)"}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
