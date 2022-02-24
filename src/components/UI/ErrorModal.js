import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ErrorModal.module.css';

import Card from './Card';
import Button from './Button';

function Backdrop(props) {
	return <div className={styles.backdrop} onClick={props.onClick}></div>;
}

function ModalOverlay(props) {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClickHandler={props.onClick}>Okay</Button>
			</footer>
		</Card>
	);
}

function ErrorModal(props) {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					onClick={props.onClick}
					title={props.title}
					message={props.message}
				/>,
				document.getElementById('overlay-root')
			)}
		</React.Fragment>
	);
}

export default ErrorModal;
