import { NavLink } from "react-router-dom";
import styles from "./AdminNav.module.css";
import { useQueryClient } from "@tanstack/react-query";
import {
  getCoaches,
  getOnlinePlanOptions,
  getShopItems,
  getTransformations,
  getMessages,
} from "../../api/api";

export default function AdminNav() {
  const queryClient = useQueryClient();
  return (
    <nav className={styles.container}>
      <NavLink
        to={"."}
        end
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
      >
        Zamówienia
      </NavLink>
      <NavLink
        to={"/admin/messages"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
        onMouseEnter={() =>
          queryClient.prefetchQuery({
            queryKey: ["messages"],
            queryFn: getMessages,
            staleTime: 1000 * 60 * 5,
          })
        }
      >
        Wiadomości
      </NavLink>
      <NavLink
        to={"/admin/products"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
        onMouseEnter={() =>
          queryClient.prefetchQuery({
            queryKey: ["products"],
            queryFn: getShopItems,
            staleTime: 1000 * 60 * 5,
          })
        }
      >
        Produkty
      </NavLink>
      <NavLink
        to={"/admin/online-options"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
        onMouseEnter={() =>
          queryClient.prefetchQuery({
            queryKey: ["onlineOptions"],
            queryFn: getOnlinePlanOptions,
            staleTime: 1000 * 60 * 5,
          })
        }
      >
        Opcje planu ONLINE
      </NavLink>
      <NavLink
        to={"/admin/coaches"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
        onMouseEnter={() =>
          queryClient.prefetchQuery({
            queryKey: ["coachesList"],
            queryFn: getCoaches,
            staleTime: 1000 * 60 * 5,
          })
        }
      >
        Trenerzy
      </NavLink>
      <NavLink
        to={"/admin/transformations"}
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
        onMouseEnter={() =>
          queryClient.prefetchQuery({
            queryKey: ["transformationList"],
            queryFn: getTransformations,
            staleTime: 1000 * 60 * 5,
          })
        }
      >
        Transformacje
      </NavLink>
    </nav>
  );
}
