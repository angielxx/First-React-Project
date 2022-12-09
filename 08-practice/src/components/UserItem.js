// components

// styles

const UserItem = (props) => {
  return (
    <div>
      <p>{[props.userName]}</p>
      <p>{props.age} years old</p>
    </div>
  )
}

export default UserItem
