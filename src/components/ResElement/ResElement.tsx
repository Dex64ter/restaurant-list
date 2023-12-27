import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from "./ResElement.module.css"
interface ResElement {
  name: string;
  comments: string;
  rating: number;
  send_date: Date;
}


export function ResElement({name, comments, rating, send_date}: ResElement) {
  const isToday = () => {
    const dataToday = new Date();
    if (
      send_date.getFullYear() === dataToday.getFullYear() &&
      send_date.getMonth() === dataToday.getMonth() &&
      send_date.getDate() === dataToday.getDate()
    ){
      return true;
    }else{
      return false;
    }
  }

  const date = format(send_date, "dd 'de' MMM yyyy", {
    locale: ptBR
  })
  
  return (
    <li className={styles.element}>
      <img className={styles.resImage} src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <section>
        <div className={styles.nomeData}>
          <strong>{name}</strong>
          <time >{isToday() ? "Hoje" : date.toString()}</time>
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