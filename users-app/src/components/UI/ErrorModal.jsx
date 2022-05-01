// @ts-check

import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => <div className={styles.backdrop} onClick={props.closeModal} />;

const ModalOverlay = (props) => (
    <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.msg}</p>
        </div>
        <footer className={styles.footer}>
            <Button onClick={props.closeModal}>Close</Button>
        </footer>
    </Card>
);

const ErrorModal = (props) => {

    return (
        <Fragment>
            {/* Use Portal to set the Modal in the root */}
            {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} />, document.querySelector('#backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay closeModal={props.closeModal} title={props.title} msg={props.msg} />, document.querySelector('#overlay-root'))}
        </Fragment>
    );
};

export default ErrorModal;