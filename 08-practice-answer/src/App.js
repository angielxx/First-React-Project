import React from 'react';
import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([])
  
  const onAddUserHandler = (username, age) => {
    setUsers((prev) => {
      return [...prev, {username, age, id: Math.random().toString()}]
    });
  }
  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHandler}/>
      <UserList users={users}/>
    </React.Fragment>
  );
}

export default App;
