import styles from './MyCars.module.css';

const MyCars = ({car}) => {
    return (
        <div className={styles.card}>
            <p>{car.marca}</p>
            <p>{car.cor}</p>
            <p>{car.ano}</p>
        </div>
    )
}

export default MyCars