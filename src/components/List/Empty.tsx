import { ClipboardList } from 'lucide-react'

import styles from './Empty.module.css'

export default function Empty() {
  return (
    <div className={styles.emptyList}>
      <ClipboardList size={56} strokeWidth={1}/>
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}