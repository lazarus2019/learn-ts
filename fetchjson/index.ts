import axios from 'axios'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
axios.get(url).then(res => {
  // Sử dụng interface để khai báo constructor của object
  const todo = res.data as Todo

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodo(id, title, completed)
})

// Khai báo kiểu dữ liệu nhận vào
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
      Has Id Todo: ${id}
      Has Title Todo: ${title}
      Has completed yet: ${completed}
    `)
}
