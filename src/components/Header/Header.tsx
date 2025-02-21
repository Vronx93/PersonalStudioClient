import { useState } from "react";
import { IsNavbarOfferOpenContextProvider } from "../../contexts/IsNavbarOfferOpen";
import useWindowWidth from "../../hooks/useWindowWidth";
import HamburgerMenuIcon from "../HamburgerMenuIcon/HamburgerMenuIcon";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import styles from "./Header.module.css";
import HamburgerMenuDropdown from "../HamburgerMenuDropdown/HamburgerMenuDropdown";
import closeImg from "../../assets/images/close.png";

export default function Header() {
  const width = useWindowWidth();
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] =
    useState<boolean>(false);

  if (width < 1020) {
    return (
      <header className={styles.header}>
        <IsNavbarOfferOpenContextProvider>
          <Logo />
          <div className={styles.rightCorner}>
            <ShoppingCart />
            <div className={styles.menuWrapper}>
              {isMobileDropdownOpen ? (
                <img
                  onClick={() => setIsMobileDropdownOpen(false)}
                  src={closeImg}
                  alt="Ikona zamknięcia menu strony."
                  className={styles.closeMobileDropdownIcon}
                />
              ) : (
                <HamburgerMenuIcon
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                />
              )}
              {isMobileDropdownOpen && (
                <HamburgerMenuDropdown
                  isMobileDropdownOpen={isMobileDropdownOpen}
                  setIsMobileDropdownOpen={setIsMobileDropdownOpen}
                />
              )}
            </div>
          </div>
        </IsNavbarOfferOpenContextProvider>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <IsNavbarOfferOpenContextProvider>
        <Logo />
        <Navbar />
        <ShoppingCart />
      </IsNavbarOfferOpenContextProvider>
    </header>
  );
}
