import styles from "./HamburgerMenuIcon.module.css";
import hamburgerMenuIcon from "../../assets/images/hamburger-menu.png";
import usePrefetchImagesFromItemsList from "../../hooks/usePrefetchImagesFromItemsList";
import { useQueryClient } from "@tanstack/react-query";
import { getCoaches, getShopItems } from "../../api/api";

export default function HamburgerMenuIcon({
  onClick,
}: {
  onClick: () => void;
}) {
  const queryClient = useQueryClient();
  function handlePrefetch() {
    usePrefetchImagesFromItemsList({
      queryClient,
      queryKey: ["products"],
      queryFn: getShopItems,
      staleTimeInMinutes: 10,
    });
    usePrefetchImagesFromItemsList({
      queryClient,
      queryKey: ["coachesList"],
      queryFn: getCoaches,
      staleTimeInMinutes: 10,
    });
  }
  return (
    <img
      onMouseEnter={handlePrefetch}
      onTouchStart={handlePrefetch}
      onClick={onClick}
      className={styles.hamburgerIcon}
      src={hamburgerMenuIcon}
      alt="Menu."
    />
  );
}
