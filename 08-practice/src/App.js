import { useState } from 'react'
import './App.css'

// components
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])
  const addNewUser = (isValid, newUser) => {
    if (isValid) setUsers((prev) => [newUser, ...prev])
  }
  return (
    <div className="App">
      <UserForm addNewUser={addNewUser} />
      <UserList users={users} />
    </div>
  )
}

export default App
