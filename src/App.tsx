import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as v4uuid } from 'uuid'

import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import ListHeader from './components/List/ListHeader'
import Item from './components/List/Item'
import Empty from './components/List/Empty'

import { PlusCircle } from 'lucide-react'

import styles from './App.module.css'
import './global.css'

export interface Task {
  id: string
  text: string
  isChecked: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  const tasksDone = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (!inputValue) {
      return
    }

    const newTask: Task = {
      id: v4uuid(),
      text: inputValue,
      isChecked: false,
    }

    setTasks([...tasks, newTask])

    setInputValue('')
  }

  function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleDeleteTask(id: string) {
    const tasksKept = tasks.filter((task) => task.id !== id)

    setTasks(tasksKept)
  }

  function handleToogleTask(id: string, value: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />

      <main className={styles.container}>
        <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
          <Input
            onChange={handleInputValue}
            type="text"
            value={inputValue}
            placeholder="Adicione uma nova tarefa"
          />
          <Button type="submit">
            Criar <PlusCircle size={16} />
          </Button>
        </form>

        <div className={styles.tasks}>
          <ListHeader tasksCreated={tasks.length} tasksDone={tasksDone} />

          {tasks.length > 0 ? (
            <div className={styles.tasksList}>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  onDelete={handleDeleteTask}
                  handleToogleTask={handleToogleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </main>
    </>
  )
}
