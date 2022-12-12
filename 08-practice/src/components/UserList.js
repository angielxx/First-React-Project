// components
import UserItem from './UserItem'
import Wrapper from './UI/Wrapper'

// style
// import styles from './UserList.module.css'

const UserList = (props) => {
  const users = props.users
  return (
    <Wrapper>
      {users.map((user, idx) => (
        <UserItem username={user.username} age={user.age} key={idx} />
      ))}
    </Wrapper>
  )
}

export default UserList
