import styles from './ListHeader.module.css'

interface ListHeaderProps {
  tasksCreated: number
  tasksDone: number
}

export default function ListHeader({
  tasksCreated,
  tasksDone,
}: ListHeaderProps) {
  return (
    <header className={styles.listHeader}>
      <p className={styles.tasksCreated}>
        Tarefas criadas <span>{tasksCreated}</span>
      </p>
      <p className={styles.tasksDone}>
        Concluídas{' '}
        <span>
          {tasksCreated === 0
            ? tasksCreated
            : `${tasksDone} de ${tasksCreated}`}
        </span>
      </p>
    </header>
  )
}
