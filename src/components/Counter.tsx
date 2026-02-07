import { useState } from 'react';
import classes from './Counter.module.scss'

export default function Counter() {
	const [counter, setCounter] = useState(0);
	const increment = () => {
		setCounter((prev) => prev + 1);
	};
	const decrement = () => {
		setCounter((prev) => prev - 1);
	};
	return (
		<>
			<button className={classes.btn} onClick={increment}>increment</button>
			<h1>Counter {counter}</h1>
			<button onClick={decrement}>decrement</button>
		</>
	);
}
