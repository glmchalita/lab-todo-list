import styles from './Header.module.css'

import TodoLogo from '../assets/todo-logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="ToDo Logo" />
    </header>
  )
}
