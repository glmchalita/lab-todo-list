import { Task } from '../../App'

import styles from './Item.module.css'
import { Check, Trash2 } from 'lucide-react'

interface ItemProps {
  data: Task
  onDelete: (id: string) => void
  handleToogleTask: (id: string, value: boolean) => void
}

export default function Item({ data, onDelete, handleToogleTask }: ItemProps) {
  function handleTaskToogle() {
    handleToogleTask(data.id, !data.isChecked)
  }

  function handleDeleteTask() {
    onDelete(data.id)
  }

  const checkboxStatus = data.isChecked
    ? styles.checkboxChecked
    : styles.checkboxUnchecked

  const paragraphStatus = data.isChecked ? styles.paragraphChecked : ''

  return (
    <div className={styles.item}>
      <label htmlFor="checkbox" onClick={handleTaskToogle}>
        <input type="checkbox" readOnly />
        <span className={`${styles.checkbox} ${checkboxStatus}`}>
          {data.isChecked && <Check size={12} />}
        </span>
      </label>

      <p className={`${styles.paragraph} ${paragraphStatus}`}>{data.text}</p>

      <button onClick={handleDeleteTask} className={styles.trash} type="button">
        <Trash2 size={14} />
      </button>
    </div>
  )
}
