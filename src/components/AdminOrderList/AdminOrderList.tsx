import { ApiGetOrderInterface } from "../../interfaces";
import AdminOrderListElement from "../AdminOrderListElement/AdminOrderListElement";
import styles from "./AdminOrderList.module.css";

export default function AdminOrderList({
	ordersList,
}: {
	ordersList: ApiGetOrderInterface[];
}) {
	const renderOrders = ordersList.map((order) => (
		<AdminOrderListElement order={order} key={crypto.randomUUID()} />
	));

	return (
		<table className={styles.container}>
			<thead>
				<tr>
					<th scope="col">Dane klienta</th>
					<th scope="col">Zamówienie</th>
					<th scope="col">Sposób dostawy</th>
					<th scope="col">Status płatności</th>
					<th scope="col">Status zamówienia</th>
				</tr>
			</thead>
			<tbody>{renderOrders}</tbody>
		</table>
	);
}
