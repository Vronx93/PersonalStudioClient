import { NavLink } from "react-router-dom";
import styles from "./ShopNav.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { getOnlinePlanOptions, getShopItems } from "../../api/api";
import usePrefetchImagesFromItemsList from "../../hooks/usePrefetchImagesFromItemsList";

export default function ShopNav({ customStyle }: { customStyle?: string }) {
  const queryClient = useQueryClient();
  return (
    <nav className={`${styles.shopNav} ${customStyle}`}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeNav : styles.navLink
        }
        to="/shop/trainings"
        onMouseEnter={async () =>
          queryClient.prefetchQuery({
            queryKey: ["onlineOptions"],
            queryFn: getOnlinePlanOptions,
            staleTime: 1000 * 60 * 5,
          })
        }
      >
        Plany treningowe
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeNav : styles.navLink
        }
        to="/shop/products"
        onMouseEnter={() =>
          usePrefetchImagesFromItemsList({
            queryClient,
            queryKey: ["products"],
            queryFn: getShopItems,
            staleTimeInMinutes: 10,
          })
        }
      >
        Produkty
      </NavLink>
    </nav>
  );
}
