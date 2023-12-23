import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import styles from "./ResElement.module.css"
interface ResElement {
  name: string;
  comments: string;
  current_date: string;
  rating: number;
}

export function ResElement({name, comments, current_date, rating}: ResElement) {
  return (
    <li className={styles.element}>
      <img className={styles.resImage} src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <section>
        <div className={styles.nomeData}>
          <strong>{name}</strong>
          <span>{current_date}</span>
        </div>
        <div className={styles.content}>
          <span>
            {comments}
          </span>
          <Box component="fieldset" mb={3}>
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </div>
      </section>
    </li>
  )
}