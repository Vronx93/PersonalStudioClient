import styles from "./ReviewStars.module.css"
import goldenStarImg from "../../assets/images/golden-star.png"

export default function ReviewStars({rate} : {rate : number}) {
    const renderGoldenStars = () => {
        let starsToRender : JSX.Element[] = []
        for(let i=0; i<rate; i++) {
            starsToRender.push(
                <li key={crypto.randomUUID()}>
                    <img 
                        className={styles.goldenStar} 
                        src={goldenStarImg} 
                        alt="Gwiazdka o złotym kolorze."
                    />
                </li>
            )
        }
        return starsToRender
    }

    return(
        <ul className={styles.list}>
            {renderGoldenStars()}
        </ul>
    )
}