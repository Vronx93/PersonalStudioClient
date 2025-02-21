import { stepToSuccessInterface } from "../../interfaces";
import StepsToSuccessListElement from "../StepsToSuccessListElement/StepsToSuccessListElement";
import styles from "./StepsToSuccessList.module.css";
import tricepsBackground from "../../assets/images/triceps.png";

export function StepsToSuccessList({
	stepsList,
}: {
	stepsList: stepToSuccessInterface[];
}) {
	const renderElements = stepsList.map((listElement) => (
		<StepsToSuccessListElement
			key={crypto.randomUUID()}
			stepElement={listElement}
		/>
	));
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>
				<span className={styles.fancyText}>Krok po kroku</span> do
				Twojego Sukcesu
			</h2>
			<img
				className={styles.tricepsBackground}
				src={tricepsBackground}
				alt=""
			/>
			<ul className={styles.list}>{renderElements}</ul>
		</section>
	);
}
