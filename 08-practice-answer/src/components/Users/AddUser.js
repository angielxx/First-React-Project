import { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import styles from './AddUser.module.css'

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [username, setUsername] = useState('');
    // const [age, setAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        const newUsername = nameInputRef.current.value;
        const newAge = ageInputRef.current.value;
        if (newUsername.trim().length === 0 || newAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        // +로 자동형변환
        if (+newAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        props.onAddUser(newUsername, newAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        // setAge('')
        // setUsername('')
    }

    // const usernameChangeHandler = event => {
    //     // setUsername(event.target.value)
    // }
    // const ageChangeHandler = event => {
    //     // setAge(event.target.value)
    // }

    const errorHandler = () => {
        setError(null);
    }
    
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    {/* value, onChange 삭제 */}
                    <input type="text" id="username" ref={nameInputRef}/>
                    <label htmlFor="age">Age</label>
                    {/* value, onChange 삭제 */}
                    <input type="number" id="age" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>

    )
}


export default AddUser;