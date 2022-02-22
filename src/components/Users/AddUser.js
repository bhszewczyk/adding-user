import React, { useState } from 'react';
import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (e) => {
		e.preventDefault();

		if (enteredUsername.trim().length < 3 || !enteredAge) {
			setError({
				title: 'Invalid input',
				message: 'Input cannot be empty',
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: 'Age out of range',
				message: 'Age cannot be 0 or negative',
			});
			return;
		}

		props.onAddUser(enteredUsername, enteredAge);

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
		<div>
			<ErrorModal
				title='An error occured!'
				message='Something went wrong'
			></ErrorModal>
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
		</div>
	);
}

export default AddUser;
