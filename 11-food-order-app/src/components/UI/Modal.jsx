// @ts-check
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
import styles from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>;
};

const Modal = (props) => {
    const overlayDiv = document.querySelector('#overlay');

    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, overlayDiv)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlayDiv)}
    </Fragment>;
};

export default Modal;