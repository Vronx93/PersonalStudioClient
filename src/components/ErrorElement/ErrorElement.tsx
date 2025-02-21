import { ErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import styles from "./ErrorElement.module.css";
import leftArrow from "../../assets/images/arrow-right-white.png";
import { useEffect, useState } from "react";

export default function ErrorElement() {
	const error = useRouteError() as ErrorResponse;
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState<string | null>(
		error.statusText
	);

	useEffect(() => {
		if (error.status === 401) {
			setErrorMessage("Nie masz uprawnień aby zobaczyć tę stronę.");
		}
		if (error.status === 404) {
			setErrorMessage("Podany link jest nieprawidłowy.");
		}
		if (error.status === 500) {
			setErrorMessage(
				"Wystąpił problem z serwerem, pracujemy aby to naprawić. Spróbuj ponownie później."
			);
		}
	}, [error]);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{error.status && error.status}</h1>
			<h2 className={styles.title2}>Błąd:</h2>
			<p>{errorMessage}</p>
			<button onClick={() => navigate(-1)}>
				<img
					className={styles.arrow}
					src={leftArrow}
					alt="Strzałka wstecz."
				/>{" "}
				Wróć
			</button>
		</div>
	);
}
