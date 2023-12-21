import styles from './Search.module.css'

export function Search() {
  return (
    <div className={styles.search}>
      <label htmlFor="Pesquisar">
        Pesquisar
        <input type="text" className="" id="Pesquisar"/>
      </label>
      <a className={styles.addButton} href="#">
        Adicionar
      </a>
    </div>
  );
}