import React from 'react';

import styles from './Button.module.css';

function Button(props) {
	return (
		<button
			className={styles.btn}
			type={props.type || 'button'}
			onClick={props.onClickHandler}
		>
			{props.children}
		</button>
	);
}

export default Button;
