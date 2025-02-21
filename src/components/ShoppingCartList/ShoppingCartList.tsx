import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useShoppingCartTrainingPlansContext } from "../../contexts/ShoppingCartTrainingPlans";
import { shoppingCartItemInterface } from "../../interfaces";
import { countTotalItemsInShopingCart } from "../../utils";
import ShoppingCartDropdownListPlanElement from "../ShoppingCartDropdownListPlanElement/ShoppingCartDropdownListPlanElement";
import ShoppingCartListEl from "../ShoppingCartListEl/ShoppingCartListEl";
import styles from "./ShoppingCartList.module.css";

export default function ShoppingCartList() {
	const { shoppingCart } = useShoppingCartContext();
	const onlineTrainingPlan = useShoppingCartTrainingPlansContext();
	const totalItemsInCart = countTotalItemsInShopingCart(
		shoppingCart,
		onlineTrainingPlan.onlineTrainingPlan ? true : false
	);
	const listElements = shoppingCart.map((item: shoppingCartItemInterface) => (
		<ShoppingCartListEl key={crypto.randomUUID()} item={item} />
	));

	return (
		<>
			{totalItemsInCart < 1 ? (
				<p className={styles.greyText}>Twój koszyk jest pusty :(</p>
			) : (
				<ul className={styles.container}>
					{onlineTrainingPlan.onlineTrainingPlan && (
						<ShoppingCartDropdownListPlanElement
							plan={onlineTrainingPlan.onlineTrainingPlan}
						/>
					)}
					{listElements}
				</ul>
			)}
		</>
	);
}
