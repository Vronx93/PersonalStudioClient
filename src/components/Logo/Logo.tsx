import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useQueryClient } from "@tanstack/react-query";
import { getTransformations } from "../../api/api";
import usePrefetchImagesFromItemsList from "../../hooks/usePrefetchImagesFromItemsList";

export default function Logo({ logoStyles }: { logoStyles?: string }) {
  const queryClient = useQueryClient();
  return (
    <>
      <Link
        className={`${styles.logoLink} ${logoStyles}`}
        to="/"
        onMouseEnter={() =>
          usePrefetchImagesFromItemsList({
            queryClient,
            queryKey: ["transformationList"],
            queryFn: getTransformations,
            staleTimeInMinutes: 10,
          })
        }
      >
        <img className={styles.logo} src={logo} alt="Logo." />
      </Link>
    </>
  );
}
