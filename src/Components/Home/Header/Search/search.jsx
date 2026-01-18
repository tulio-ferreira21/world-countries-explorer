import styles from '../header.module.css';

import lupa from '../../../../images/lupa.png'
export default function Search({ value, onChange }) {
    return (
        <>
            <div className={`d-flex justify-content-between gap-2 align-items-center`}>
                <img src={lupa} alt="Lupa de pesquisa" className={styles.img} />
                <input type="search"
                    placeholder='Search...'
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`${styles.input}`}
                />

            </div>
        </>
    )
}