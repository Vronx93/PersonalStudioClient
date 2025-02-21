import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ShoppingCartProvider } from "../../contexts/ShoppingCartContext";
import { IsLoggedInContextProvider } from "../../contexts/IsLoggedInContext";
import { CurrentUploadImagesContextProvider } from "../../contexts/CurrentUploadImagesContext";
import { IsNavbarOfferOpenContextProvider } from "../../contexts/IsNavbarOfferOpen";
import { ShoppingCartTrainingPlansProvider } from "../../contexts/ShoppingCartTrainingPlans";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Layout() {
  return (
    <div className={styles.siteWrapper} data-testid="siteWrapper">
      <IsLoggedInContextProvider>
        <ShoppingCartProvider>
          <ShoppingCartTrainingPlansProvider>
            <CurrentUploadImagesContextProvider>
              <IsNavbarOfferOpenContextProvider>
                <Header />
                <main>
                  <Outlet />
                </main>
                <Footer />
              </IsNavbarOfferOpenContextProvider>
            </CurrentUploadImagesContextProvider>
          </ShoppingCartTrainingPlansProvider>
        </ShoppingCartProvider>
      </IsLoggedInContextProvider>
      <ReactQueryDevtools />
    </div>
  );
}
