// @ts-check

import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import React from 'react';

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            <div className={styles.backdrop} onClick={props.closeModal}></div>
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
        </React.Fragment>
    );
};

export default ErrorModal;