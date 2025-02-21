import { ReactNode } from "react";
import styles from "./AdminActionBar.module.css";

export default function AdminActionBar({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<section className={`${styles.container} ${className}`}>
			{children}
		</section>
	);
}
