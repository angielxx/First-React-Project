// components
import Wrapper from './UI/Wrapper'

// style
import styles from './UserForm.module.css'

const UserForm = () => {
  const onFormSubmitHandler = (event) => {
    event.preventDefault()
    console.log(event)
    const username = event.target[0].value
    const age = event.target[1].value
    const newUser = {
      username,
      age,
    }
    event.target[0].value = ''
    event.target[1].value = ''
    console.log(newUser)
  }
  return (
    <Wrapper>
      <form className={`${styles.userForm}`} onSubmit={onFormSubmitHandler}>
        <label htmlFor="">Username</label>
        <input type="text" id="username" />
        <label htmlFor="">Age(Years)</label>
        <input type="number" id="age" />
        <button type="submit">Add User</button>
      </form>
    </Wrapper>
  )
}

export default UserForm
