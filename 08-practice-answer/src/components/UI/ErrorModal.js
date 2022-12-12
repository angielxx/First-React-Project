import Card from "./Card";
import Button from "./Button";

import styles from './ErrorModal.module.css';
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClick}/>
}

const ModalOverlay = props => {
    return (
    <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onClick}>Okay</Button>
        </footer>
    </Card>
)
}

const ErrorModal = props => {
    return (
    <React.Fragment>
        {/* 첫번째 매개변수 : 컴포넌트, 두번째 매개변수 : 포털 포인터 */}
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onClick}/>, document.getElementById('overlay-root'))}
    </React.Fragment>
    )
};

export default ErrorModal;