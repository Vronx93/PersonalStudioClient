import { useLoaderData, useSearchParams } from "react-router-dom";
import { getOrders } from "../../../api/api";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import AdminOrderList from "../../../components/AdminOrderList/AdminOrderList";
import { ApiGetOrderInterface } from "../../../interfaces";
import { useEffect, useState } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import AdminActionBar from "../../../components/AdminActionBar/AdminActionBar";
import FilterButton from "../../../components/FilterButton/FilterButton";
import styles from "./AdminOrdersPage.module.css";

const ordersQuery = () => {
  return {
    queryKey: ["orders"],
    queryFn: async () => await getOrders(),
    staleTime: 1000 * 60 * 10,
  };
};

async function loader(queryClient: QueryClient) {
  const query = ordersQuery();
  const orders =
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(ordersQuery()));
  return { orders: orders };
}

export default function AdminOrdersPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const loaderPromise = useLoaderData() as Awaited<{
    orders: ApiGetOrderInterface;
  }>;
  const { data: orders } = useQuery({
    ...ordersQuery(),
    initialData: loaderPromise.orders,
  });
  const [filteredOrders, setFilteredOrders] =
    useState<ApiGetOrderInterface[]>(orders);
  const orderStatus = searchParams.get("orderStatus");
  const paymentStatus = searchParams.get("paymentStatus");

  useEffect(() => {
    const filterOrders = () => {
      return orders.filter((order: ApiGetOrderInterface) => {
        const matchesOrderStatus = orderStatus
          ? order.orderStatus === orderStatus
          : true;
        const matchesPaymentStatus = paymentStatus
          ? order.paymentStatus === paymentStatus
          : true;
        return matchesOrderStatus && matchesPaymentStatus;
      });
    };
    setFilteredOrders(filterOrders());
  }, [orders, orderStatus, paymentStatus]);

  return (
    <>
      <AdminHeader title={"Zamówienia"} />
      <>
        <AdminActionBar>
          <button
            className={`${styles.resetFiltersButton} ${
              searchParams.size < 1 && styles.active
            }`}
            onClick={() => setSearchParams({})}
          >
            Wszystkie
          </button>
          <FilterButton
            text={"Do zrealizowania"}
            paramName={"orderStatus"}
            paramValue={"NotCompleted"}
          />
          <FilterButton
            text={"Zrealizowane"}
            paramName={"orderStatus"}
            paramValue={"Completed"}
          />
          <FilterButton
            text={"Opłacone"}
            paramName={"paymentStatus"}
            paramValue={"Completed"}
          />
        </AdminActionBar>
        <AdminOrderList ordersList={filteredOrders} />
      </>
    </>
  );
}

AdminOrdersPage.loader = loader;
