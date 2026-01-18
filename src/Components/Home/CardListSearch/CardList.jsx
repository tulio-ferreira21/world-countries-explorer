import { useState, useEffect } from 'react'
import styles from './cardlist.module.css'
export default function CardList({ countries, onSelect }) {
    const [error, setError] = useState('');

    useEffect(() => {
        if (!countries.length) {
            setError('País não encontrado')
            return;
        }
        setError('');
    }, [countries])
    const Height =
        countries.length < 13 ? '100%' : 'auto';
    return (
        <div className={styles.container} style={{ height: Height }}>
            {
                <h4 className='p-3'>Exibindo {countries.length} resultado(s): </h4>
            }
            {
                error &&
                <div className={styles.country}>{error}</div>
            }

            {countries.map(country => (
                <div className={styles.country} onClick={() => onSelect(country)} >
                    <img src={country.flags.png} alt={`Bandeira do país ${country.name.common}`} className='img-fluid img-thumbnail'
                        width={50}
                    />
                    <p>
                        <strong>{country.name.common}</strong>
                    </p>
                </div>
            ))}
        </div>
    )
}