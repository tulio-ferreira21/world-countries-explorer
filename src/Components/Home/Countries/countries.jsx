import styles from './countries.module.css'

export default function Countries({ countries, onSelect }) {
    return (
        <>
            {countries.map((c) => (
                <div key={c.name.common} 
                className={`card p-3 shadow-sm d-flex flex-clomun gap-2 ${styles.cardCountry}`}
                onClick={()=>onSelect(c)}
                >
                <img src={c.flags.png} alt={`Imagem do país ${c.name.common}`} className={styles.imgCountry} />
                <h3>{c.name.common}</h3>
                <p>
                <strong>População: </strong>    {c.population.toLocaleString('pt-BR')} Habitantes
                </p>
            </div>
            ))}
        </>
    )
}