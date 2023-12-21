import styles from "./ResElement.module.css"

export function ResElement() {
  return (
    <li className={styles.element}>
      <img className={styles.resImage} src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <section>
        <div className={styles.nomeData}>
          <strong>Coco Bambu</strong>
          <span>24 02 2023</span>
        </div>
        Sem comentários
      </section>
    </li>
  )
}