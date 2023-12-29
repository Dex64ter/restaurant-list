import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { ResElement } from './components/ResElement/ResElement';
import { NewReviewModal } from './components/NewReviewModal/NewReviewModal';
import { FiSearch } from 'react-icons/fi';

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './services/firebase';

import './global.css';
import styles from './App.module.css';

Modal.setAppElement('#root');

type Review = {
  dateFormat: Date;
  id: string;
  name: string;
  comments: string;
  rating: number;
  date: {
    seconds: number;
    nanoseconds: number;
  };
}

export function App() {
  const [newReviewModalIsOpen, setNewReviewModalIsOpen] = useState(false);
  const [resultSearch, setResultSearch] = useState("");
  const [reviewList, setReviewList] = useState<Review[]>([]);

  const newArraySearched = query(collection(db, "reviews"), where("name", "==", resultSearch));
  const querySnapShot = async () =>  await getDocs(newArraySearched).then(element => {
    const newData = element.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }))

    const elements = newData as Review[];
    const newReviews = elements.map((element) => ({
      ...element,
      dateFormat: new Date(element.date.seconds * 1000),
    }))
    setReviewList(newReviews);
  });

  function handleModal(){
    setNewReviewModalIsOpen(!newReviewModalIsOpen);
  }

  function closeModal(){
    setNewReviewModalIsOpen(false);
  }

  const fetchPost = async () => {
    await getDocs(collection(db, 'reviews'))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))

      const elements = newData as Review[];
      const newReviews = elements.map((element) => ({
        ...element,
        dateFormat: new Date(element.date.seconds * 1000),
      }))
      setReviewList(newReviews);
      
    });

  }

  useEffect(() => {
    resultSearch ? querySnapShot() : fetchPost();
  },[reviewList, resultSearch])

  return ( 
    <>
      <main className={styles.container}>
        <h1>Restaurantes</h1>
        <section className={styles.list}>
        <div className={styles.search}>
          <fieldset>
            <label htmlFor="Pesquisar">
              Pesquisar <FiSearch/>
            </label>
            <input
              type="text"
              id="Pesquisar"
              onChange={event => setResultSearch(event.target.value)}
            />
          </fieldset>
          
          <a className={styles.addButton} href="#" onClick={handleModal}>
            Adicionar
          </a>
          
        </div>
          <NewReviewModal isOpen={newReviewModalIsOpen} onRequest={closeModal} />
          <ul>
            {
              reviewList.map(rev => {
                return (
                  <ResElement
                    key={rev.id}
                    name={rev.name}
                    comments={rev.comments}
                    rating={rev.rating}
                    send_date={rev.dateFormat}
                  />
                )
              })
            }
          </ul>
        </section>
      </main>
    </>
  )
}

