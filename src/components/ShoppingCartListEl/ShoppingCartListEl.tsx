import trash from "../../assets/images/trash.png";
import styles from "./ShoppingCartListEl.module.css";
import { shoppingCartItemInterface } from "../../interfaces";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useState } from "react";
import { formatIntToPrice } from "../../utils";

export default function ShoppingCartListEl({
	item,
}: {
	item: shoppingCartItemInterface;
}) {
	const shoppingCartInterface = useShoppingCartContext();
	const [quantity, setQuantity] = useState(item.quantity);

	return (
		<li className={styles.container}>
			<input
				className={styles.hidden}
				type="text"
				hidden
				readOnly
				name="product"
				id="product"
				value={[
					item.id,
					quantity.toString(),
					item.size ? item.size : "-",
				]}
			/>
			<article className={styles.article}>
				<header className={styles.header}>
					<h3 className={styles.title}>{item.name}</h3>
					<DeleteIcon
						customStyles={styles.delete}
						icon={trash}
						removeFunction={() =>
							shoppingCartInterface.removeFromCart(
								item.id,
								item.size
							)
						}
					/>
				</header>
				<div className={styles.productDetailsWrapper}>
					<div className={styles.quantityWrapper}>
						<label className={styles.text} htmlFor="quantity">
							Ilość:{" "}
						</label>
						<input
							required
							type="number"
							value={quantity}
							name="quantity"
							id={`${item.id},${item.size}`}
							min={1}
							onChange={(event: any) =>
								shoppingCartInterface.handleQuantityChange(
									event,
									item.id,
									setQuantity,
									item.size
								)
							}
							className={styles.input}
						/>
					</div>
					{item.size && <p className={styles.text}>{item.size}</p>}
					<p className={styles.text}>
						{formatIntToPrice(item.price)} zł
					</p>
				</div>
			</article>
		</li>
	);
}
