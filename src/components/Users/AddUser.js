import React, { useState, useRef } from 'react';
import styles from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

function AddUser(props) {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

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

	const resetErrorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error ? (
				<ErrorModal
					title={error.title}
					message={error.message}
					onClick={resetErrorHandler}
				></ErrorModal>
			) : (
				''
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='userName'>Username</label>
					<input
						id='userName'
						type='text'
						onChange={usernameChangeHandler}
						value={enteredUsername}
						ref={nameInputRef}
					></input>
					<label htmlFor='userAge'>Age</label>
					<input
						id='userAge'
						type='number'
						onChange={ageChangeHandler}
						value={enteredAge}
						ref={ageInputRef}
					></input>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
}

export default AddUser;
