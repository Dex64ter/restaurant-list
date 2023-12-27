import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { Search } from './components/Search/Search';
import { ResElement } from './components/ResElement/ResElement';
import { NewReviewModal } from './components/NewReviewModal/NewReviewModal';
import { collection, getDocs } from 'firebase/firestore';
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
  const [reviewList, setReviewList] = useState<Review[]>([]);

  function handleModal(){
    setNewReviewModalIsOpen(!newReviewModalIsOpen);
  }

  function closeModal(){
    setNewReviewModalIsOpen(false);
  }

  const fectchPost = async () => {
    await getDocs(collection(db, 'Reviews'))
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
      setReviewList(newReviews)
    });

  }

  useEffect(() => {
    fectchPost();
  },[reviewList])

  return ( 
    <>
      <main className={styles.container}>
        <h1>Restaurantes</h1>
        <section className={styles.list}>
          <Search onNewReviewModalIsOpen={handleModal} />
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

