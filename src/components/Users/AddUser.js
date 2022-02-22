import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

function AddUser(props) {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = (e) => {
		e.preventDefault();
		if (!enteredUsername || !enteredAge) {
			return;
		}
		console.log(enteredUsername, enteredAge);

		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='userName'>Username</label>
				<input
					id='userName'
					type='text'
					onChange={usernameChangeHandler}
					value={enteredUsername}
				></input>
				<label htmlFor='userAge'>Age</label>
				<input
					id='userAge'
					type='number'
					onChange={ageChangeHandler}
					value={enteredAge}
				></input>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	);
}

export default AddUser;
