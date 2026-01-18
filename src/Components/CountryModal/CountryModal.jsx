import CountryMap from './CountryMap/countrymap';
import styles from './modal.module.css';


export default function CountryModal({ country, onClose }) {
    if (!country)  return null;
    return (
        <>
            <div className={styles.overlay}></div>
            <div className="modal show d-block">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content d-flex gap-3">
                        <div className="modal-header">
                            <h3 className="modal-title">{country.name?.official || "Carregando..."}</h3>
                            <button className="btn btn-close" onClick={onClose} />
                        </div>
                        <div className="modal-body">
                            <div className="d-flex gap-3 align-items-center">
                                <img src={country.flags.png} alt={`Flag of ${country.name.common}`}
                                    style={{ maxWidth: 150 }}
                                />
                                <h4>{country.name.common}</h4>
                            </div>
                            <hr />
                            <CountryMap country={country} />
                            <hr />
                            <p><strong>Capital:</strong> {country.capital?.[0] || 'Não informado'}</p>
                            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Continent:</strong> {country.region}</p>
                            <p><strong>Region:</strong> {country.subregion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}