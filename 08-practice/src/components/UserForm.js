// components
import Wrapper from './UI/Wrapper'
import Modal from './Modal'

// style
import styles from './UserForm.module.css'

const UserForm = (props) => {
  let isValid = true
  let status
  const onFormSubmitHandler = (event) => {
    event.preventDefault()
    const username = event.target[0].value
    const age = event.target[1].value
    const newUser = {
      username,
      age,
    }
    event.target[0].value = ''
    event.target[1].value = ''
    if (!username.length || !age.length) {
      isValid = false
      status = 'empty'
    } else if (Number(age) <= 0) {
      isValid = false
      status = 'age'
    }

    props.addNewUser(isValid, newUser)
  }
  return (
    <div>
      <Modal status={status} />
      <Wrapper>
        <form className={`${styles.userForm}`} onSubmit={onFormSubmitHandler}>
          <label htmlFor="">Username</label>
          <input type="text" id="username" />
          <label htmlFor="">Age(Years)</label>
          <input type="number" id="age" />
          <button type="submit">Add User</button>
        </form>
      </Wrapper>
    </div>
  )
}

export default UserForm
