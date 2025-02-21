import { NavLink } from "react-router-dom";
import styles from "./HamburgerMenuDropdown.module.css";
import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getOnlinePlanOptions, getCoaches } from "../../api/api";
import { handleHover } from "./HamburgerMenuDropdown.utils";

export default function HamburgerMenuDropdown({
  isMobileDropdownOpen,
  setIsMobileDropdownOpen,
}: {
  isMobileDropdownOpen: boolean;
  setIsMobileDropdownOpen: Function;
}) {
  const queryClient = useQueryClient();
  // close on click outside start
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileDropdownOpen) {
      document.addEventListener("mousedown", closeDropdownOnOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
    };
  }, [mobileDropdownRef, closeDropdownOnOutsideClick]);

  function closeDropdownOnOutsideClick(event: any) {
    if (
      isMobileDropdownOpen &&
      !mobileDropdownRef.current?.contains(event.target)
    ) {
      setIsMobileDropdownOpen(false);
    }
  }
  // close on click outside end
  return (
    <div ref={mobileDropdownRef} className={styles.container}>
      <NavLink
        onClick={() => setIsMobileDropdownOpen(false)}
        to={"/shop/trainings"}
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
        onClick={() => setIsMobileDropdownOpen(false)}
        onMouseEnter={async () =>
          await handleHover({
            queryClient: queryClient,
            queryKey: ["coachesList"],
            queryFn: getCoaches,
            staleTimeInMinutes: 10,
          })
        }
        to={"/coaches"}
      >
        Trenerzy
      </NavLink>
      <NavLink onClick={() => setIsMobileDropdownOpen(false)} to={"/studio"}>
        Studio
      </NavLink>
      <NavLink onClick={() => setIsMobileDropdownOpen(false)} to={"/about"}>
        O mnie
      </NavLink>
      <NavLink
        onClick={() => setIsMobileDropdownOpen(false)}
        className={styles.noBorder}
        to={"/contact"}
      >
        Kontakt
      </NavLink>
    </div>
  );
}
