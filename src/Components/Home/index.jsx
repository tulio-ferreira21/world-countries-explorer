import styles from './home.module.css'
import { useState, useEffect } from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import Countries from './Countries/countries';
import { getAllCountries } from '../services/allCountries';
import CardList from './CardListSearch/CardList';
import CountryModal from '../CountryModal/CountryModal';

export default function Home() {
    const [query, SetQuery] = useState('');
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const [selectCountry, setSelect] = useState(null);

    function handleSelectedCountry(country) {
        setSelect(country)
    }
    // Criar modal para país
    useEffect(() => {
        async function loadCountries() {
            try {
                const data = await getAllCountries();
                setCountries(data);
            } catch (error) {
                setError('Erro ao carregar países: ' + error.message)
            } finally {
                setLoading(false)
            }
        }
        loadCountries();
    }, [])
    // Uma váriavel que vai receber os resultados filtrados de países que tenham em seu nome a string pesquisada 
    const filterCountry = countries.filter(country =>
        // Filtra por nome em letra minúscula
        country.name.common
            .toLowerCase()
            .includes(query.toLowerCase())
        // Transforma oq foi digitado em letra minúscula e vê se os países que estáo dentro do array countries teem, em seu nome, a string digitada
    );
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header search={query} setSearch={SetQuery} />
            {/** E adiciona o resultado aqui. Componente que vai exibir os resultados pesquisados */}
            {query && <CardList countries={filterCountry} onSelect={handleSelectedCountry} />}
            <div className={styles.content}>
                <h1>Países</h1>
                <p>Quantidade de países: {countries.length}</p>
            </div>
            <main className='flex-grow-1'>
                <div className={styles.container}>
                    {loading && <div className='alert alert-primary' role='alert'>Carregando...</div>}
                    {error && <div className="alert alert-danger" role='alert'>{error}</div>}
                    {selectCountry &&
                        <CountryModal country={selectCountry} onClose={() => setSelect(null)} />
                    }
                    <Countries countries={countries} onSelect={handleSelectedCountry} />
                </div>
                <div className="p-5"></div>
            </main>
            <Footer />
        </div>
    )
}