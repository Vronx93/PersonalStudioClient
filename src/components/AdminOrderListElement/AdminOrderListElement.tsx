import { useQueryClient } from "@tanstack/react-query";
import { getOrders, updateOrderStatus } from "../../api/api";
import { ApiGetOrderInterface } from "../../interfaces";
import styles from "./AdminOrderListElement.module.css";
import { useState } from "react";
import Loader from "../Loader/Loader";

export default function AdminOrderListElement({
	order,
}: {
	order: ApiGetOrderInterface;
}) {
	const [isProcessing, setIsProcessing] = useState(false);
	const queryClient = useQueryClient();
	const name = `${order.firstName} ${order.lastName}`;
	const phone = order.phoneNumber;
	const email = order.email;
	const streetName = order.street;
	const streetNumber = order.houseNumber;
	const apartmentNumber = order.apartmentNumber;
	const location = order.city;
	const zipCode = order.postalCode;
	const products = order.gadgets;

	const handleOrderStatusChange = async () => {
		setIsProcessing(true);
		const newOrderStatus =
			order.orderStatus === "Completed" ? "NotCompleted" : "Completed";
		await updateOrderStatus(order.id, newOrderStatus);
		setIsProcessing(false);
		await queryClient.invalidateQueries({ queryKey: ["orders"] });
		await queryClient.fetchQuery({
			queryKey: ["orders"],
			queryFn: async () => await getOrders(),
			staleTime: 1000 * 60 * 10,
		});
	};

	return (
		<tr className={styles.container}>
			<td>
				{name} <br /> tel: {phone} <br /> email: {email} <br />
				ul. {streetName} <br /> nr. {streetNumber}{" "}
				{apartmentNumber && "m." + apartmentNumber} <br />
				{location} {zipCode}
			</td>
			<td>
				{products.map((product) => (
					<span key={crypto.randomUUID()} className={styles.product}>
						{`${product.count}x ${product.name} ${
							product.size ?? ""
						}`}{" "}
						<br />
					</span>
				))}
			</td>
			<td>{order.deliveryDetails}</td>
			<td>{order.paymentStatus}</td>
			<td>
				{isProcessing ? (
					<Loader color="rgba(203, 78, 50, 1)" />
				) : (
					<span
						className={styles.orderStatus}
						onClick={handleOrderStatusChange}>
						{order.orderStatus === "NotCompleted"
							? "Zrealizuj"
							: "Cofnij realizację"}
					</span>
				)}
			</td>
		</tr>
	);
}
