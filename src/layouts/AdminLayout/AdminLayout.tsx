import { Outlet } from "react-router-dom";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
import styles from "./AdminLayout.module.css";
import { IsLoggedInContextProvider } from "../../contexts/IsLoggedInContext";
import { CurrentUploadImagesContextProvider } from "../../contexts/CurrentUploadImagesContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function AdminLayout() {
  return (
    <div className={styles.siteWrapper}>
      <IsLoggedInContextProvider>
        <CurrentUploadImagesContextProvider>
          <AdminDashboard />
          <main className={styles.main}>
            <Outlet />
          </main>
        </CurrentUploadImagesContextProvider>
      </IsLoggedInContextProvider>
      <ReactQueryDevtools />
    </div>
  );
}
