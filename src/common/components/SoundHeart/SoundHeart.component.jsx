import styles from './SoundHeart.module.css'


export default function SoundHeart( props ){

    return (
        <div className={`${styles['heart-wrapper']}`} >
            <div className={`${styles['heart']}`} >
                <div className={`${styles['heart-piece']} ${styles['heart-piece-0']}`}></div>
                <div className={`${styles['heart-piece']} ${styles['heart-piece-1']}`}></div>
                <div className={`${styles['heart-piece']} ${styles['heart-piece-2']}`}></div>
                <div className={`${styles['heart-piece']} ${styles['heart-piece-3']}`}></div>
                <div className={`${styles['heart-piece']} ${styles['heart-piece-4']}`}></div>
                <div className={`${styles['heart-piece']} ${styles['heart-piece-5']}`}></div>
                <div className={`${styles['heart-piece']} ${styles['heart-piece-6']}`}></div>
                <div className={`${styles['heart-piece']} ${styles['heart-piece-7']}`}></div>
                <div className={`${styles['heart-piece']} ${styles['heart-piece-8']}`}></div>
            </div>
        </div>
    );
}