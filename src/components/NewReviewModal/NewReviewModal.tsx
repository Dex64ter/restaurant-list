import Modal from 'react-modal';
import styles from './NewReviewModal.module.css'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useState } from 'react';


interface NewReviewModalProps {
  isOpen: boolean;
  onRequest: () => void;
}

export function NewReviewModal({isOpen, onRequest}: NewReviewModalProps) {
  const [value, setValue] = useState(0);

  return (
    <Modal
      className="Modal"
      overlayClassName="Modal-overlay"
      isOpen={isOpen}
      contentLabel="Example Modal"
      onRequestClose={onRequest}
    >
      <form className={styles.formModal} action="">
        <h2>Novo Review</h2>
        <fieldset>
          <label htmlFor="name">Nome</label>
          <input id='name' type="text" />
        </fieldset>
        <fieldset>
          <label htmlFor="comments">Comentários</label>
          <textarea className={styles.textAreaComp} id='comments' />
        </fieldset>

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="label">Nota</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(_e, newValue) => {
              setValue(newValue || 0);
            }}
          />
        </Box>

        <div className={styles.buttonArea}>
          <button onClick={onRequest} className={styles.cancelButton}>Cancelar</button>
          <button className={styles.addButton} type="submit">Adicionar</button>
        </div>
      </form>
    </Modal>
  )
}