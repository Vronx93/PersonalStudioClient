import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { getCoaches, getOnlinePlanOptions } from "../../api/api";
import usePrefetchImagesFromItemsList from "../../hooks/usePrefetchImagesFromItemsList";

export default function Navbar() {
  const queryClient = useQueryClient();

  return (
    <>
      <nav className={styles.container}>
        <nav className={styles.navbar}>
          <NavLink
            to="/shop/trainings"
            onMouseEnter={async () =>
              queryClient.prefetchQuery({
                queryKey: ["onlineOptions"],
                queryFn: getOnlinePlanOptions,
                staleTime: 1000 * 60 * 10,
              })
            }
          >
            Oferta
          </NavLink>
          <NavLink
            to="/coaches"
            onMouseEnter={() =>
              usePrefetchImagesFromItemsList({
                queryClient: queryClient,
                queryKey: ["coachesList"],
                queryFn: getCoaches,
                staleTimeInMinutes: 10,
              })
            }
          >
            Trenerzy
          </NavLink>
          <NavLink to="/studio">Studio</NavLink>
          <NavLink end to="/about">
            O mnie
          </NavLink>
          <NavLink to="/contact">Kontakt</NavLink>
        </nav>
      </nav>
    </>
  );
}
