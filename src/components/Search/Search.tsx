import styles from './Search.module.css';
import { FiSearch } from 'react-icons/fi';

interface SearchProps {
  onNewReviewModalIsOpen: () => void;
}

export function Search({onNewReviewModalIsOpen}:SearchProps) {
  return (
    <div className={styles.search}>
      <fieldset>
        <label htmlFor="Pesquisar">
          Pesquisar <FiSearch/>
        </label>
        <input type="text" className="" id="Pesquisar" />
      </fieldset>
      
      <a className={styles.addButton} href="#" onClick={onNewReviewModalIsOpen}>
        Adicionar
      </a>
      
    </div>
  );
}