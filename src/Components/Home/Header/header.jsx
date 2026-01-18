import styles from "./header.module.css"
import Search from "./Search/search"
export default function Header({ search, setSearch }) {
    return (
        <header className={`bg-dark text-white d-flex justify-content-between align-items-center p-3 ${styles.header}`}>
            <h3>Countrys</h3>
            <Search value={search} onChange={setSearch} />
        </header>
    )

}