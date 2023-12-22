import Modal from 'react-modal';
import { useState } from 'react';
import { Search } from './components/Search/Search';
import { ResElement } from './components/ResElement/ResElement';
import { NewReviewModal } from './components/NewReviewModal/NewReviewModal';

import './global.css';
import styles from './App.module.css';

Modal.setAppElement('#root');

export function App() {
  const [newReviewModalIsOpen, setNewReviewModalIsOpen] = useState(false);

  function handleModal(){
    setNewReviewModalIsOpen(!newReviewModalIsOpen);
  }

  function closeModal(){
    setNewReviewModalIsOpen(false);
  }

  return ( 
    <>
      <main className={styles.container}>
        <h1>Restaurantes</h1>
        <section className={styles.list}>
          <Search onNewReviewModalIsOpen={handleModal} />
          <NewReviewModal isOpen={newReviewModalIsOpen} onRequest={closeModal} />
          <ul>
            <ResElement name={'Coco Bambu'} comments={'Lorem ipsum dolor sit amet. Provident, voluptatum'} current_date={'24/02/2023'} rating={4} />
            <ResElement name={'Sushi Club'} comments={'Lorem ipsum dolor sit amet. Provident, voluptatum'} current_date={'05/05/2023'} rating={3} />
          </ul>
        </section>
      </main>
    </>
  )
}

