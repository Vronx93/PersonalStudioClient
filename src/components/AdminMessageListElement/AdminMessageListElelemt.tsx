import { MessageInterface } from "../../interfaces";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import styles from "./AdminMessageListElelemt.module.css";
import redDelete from "../../assets/images/red-delete.png";

export default function AdminMessageListElelemt({
	element,
	deleteFn,
}: {
	element: MessageInterface;
	deleteFn: (messageId: string) => void;
}) {
	const messageIsoDateString = new Date(element.createdDate);
	const dateOptions: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZoneName: "shortGeneric",
	};
	const timestamp: string = messageIsoDateString.toLocaleDateString(
		"pl-PL",
		dateOptions
	);
	return (
		<article>
			<header className={styles.header}>
				<span className={styles.infoContainer}>
					<div className={styles.infoElementWrapper}>
						<p>Od: </p>
						{`${element.firstName} ${element.lastName}`}
					</div>
					<div className={styles.infoElementWrapper}>
						<p>Email: </p>
						{element.emailAddress}
					</div>
					<div className={styles.infoElementWrapper}>
						<p>Telefon: </p>
						{element.phoneNumber}
					</div>
				</span>
				<DeleteIcon
					customStyles={styles.deleteIcon}
					dialog
					dialogText="Czy na pewno chcesz usunąć wiadomość od"
					dialogItemName={`${element.firstName} ${element.lastName}`}
					removeFunction={() => deleteFn(element.id)}
					icon={redDelete}
				/>
			</header>
			<p className={styles.text}>{element.message}</p>
			<pre className={styles.timestamp}>{timestamp}</pre>
		</article>
	);
}
