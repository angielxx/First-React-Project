// components

// styles
import styles from './UserItem.module.css'

const UserItem = (props) => {
  return (
    <div className={styles.userItem}>
      <span>{props.username}</span>
      <span>({props.age} years old)</span>
    </div>
  )
}

export default UserItem
