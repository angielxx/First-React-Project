import styles from './Modal.module.css'

const Modal = (props) => {
  let content
  if (props.status === 'empty') {
    content = 'Please enter a valid name and age (non-empty values)'
  } else if (props.status === 'age') {
    content = 'Please enter a valid age (> 0)'
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modal + '__title'}>
        <h2>Invalid Input</h2>
      </div>
      <div className={styles.modal + '__content'}>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Modal
