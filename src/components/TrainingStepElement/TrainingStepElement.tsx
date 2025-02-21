import styles from "./TrainingStepElement.module.css"

interface TrainingStepElementInterface {
    title: string,
    icon: string
}

export default function TrainingStepElement({title, icon} : TrainingStepElementInterface) {
    return(
        <li className={styles.container}>
            <img className={styles.icon} src={icon} alt="" />
            <h3 className={styles.title}>{title}</h3>
        </li>
    )
}