import Modal from "react-modal";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FormEvent, useState } from "react";
import { db } from "../../services/firebase";
import { Timestamp, collection, addDoc } from "firebase/firestore";

import styles from "./NewReviewModal.module.css";

interface NewReviewModalProps {
  isOpen: boolean;
  onRequest: () => void;
}

export function NewReviewModal({ isOpen, onRequest }: NewReviewModalProps) {
  const [nameRestaurant, setNameRestaurant] = useState('');
  const [comments, setComments] = useState('');
  const [valueRating, setValueRating] = useState(0);
  const [newReview, setNewReview] = useState({});
  const currentTime = Timestamp.fromDate(new Date());

  function handleCreateNewReview(event: FormEvent){
    event.preventDefault();
    storeData();
  }

  const storeData = async () => await addDoc(collection(db, "Reviews"), newReview)
  .then((docRef) => {
    console.log('Documento adicionado com ID:', docRef.id);
  })
  .catch((error) => {
    console.error('Erro ao adicionar documento:', error);
  });

  function handleClickButton(){
    const data = {
      name: nameRestaurant,
      comments: comments,
      rating: valueRating,
      date: currentTime,
    }
    setNewReview(data);
  }

  return (
    <Modal
      className="Modal"
      overlayClassName="Modal-overlay"
      isOpen={isOpen}
      contentLabel="Example Modal"
      onRequestClose={onRequest}
    >
      <form className={styles.formModal} onSubmit={handleCreateNewReview}>
        <h2>Novo Review</h2>
        <fieldset>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome do estabelecimento"
            value={nameRestaurant}
            onChange={event => setNameRestaurant(event.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="comments">Comentários</label>
          <textarea
            className={styles.textAreaComp}
            id="comments"
            name="comments"
            placeholder="Comentários"
            value={comments}
            onChange={event => setComments(event.target.value)}

          />
        </fieldset>

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="label">Nota</Typography>
          <Rating
            name="rating"
            value={valueRating}
            onChange={(_e, newValue) => {
              setValueRating(newValue || 0);
            }}
          />
        </Box>

        <div className={styles.buttonArea}>
          <button onClick={onRequest} className={styles.cancelButton}>
            Cancelar
          </button>

          <button type="submit" onClick={handleClickButton} className={styles.addButton}>
            Adicionar
          </button>
        </div>
      </form>
    </Modal>
  );
}
