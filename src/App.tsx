import { Search } from './components/Search/Search';
import { ResElement } from './components/ResElement/ResElement';

import './global.css';
import styles from './App.module.css';

export function App() {
  return ( 
    <>
      <main className={styles.container}>
        <h1>Restaurantes</h1>
        <section className={styles.list}>
          <Search />
          <ul>
            <ResElement />
            <ResElement />
            <ResElement />
          </ul>
        </section>
      </main>
    </>
  )
}

