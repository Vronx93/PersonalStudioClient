import styles from "./BenefitElement.module.css"

export default function BenefitElement({benefit} : {benefit : {title: string, text: string}}) {
    return(
        <li className={styles.container}>
            <h3 className={styles.title}>{benefit.title}</h3>
            <p className={styles.text}>{benefit.text}</p>
        </li>
    )
}