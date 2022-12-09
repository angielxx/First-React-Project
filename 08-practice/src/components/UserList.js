// components
import UserItem from './UserItem'
import Wrapper from './UI/Wrapper'

// style
// import styles from './UserList.module.css'

const UserList = (props) => {
  const users = props.users
  return (
    <Wrapper>
      {users.map((user) => (
        <UserItem username={user.username} age={user.age} />
      ))}
    </Wrapper>
  )
}

export default UserList
