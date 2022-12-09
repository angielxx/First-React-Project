// import { useState } from 'react'
import './App.css'

// components
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  // const [users, setUsers] = useState([])
  let users = []
  return (
    <div className="App">
      <UserForm />
      <UserList users={users} />
    </div>
  )
}

export default App
