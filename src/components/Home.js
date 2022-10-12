import { Link, useLocation } from 'react-router-dom';

const Home = () => {
	const { state } = useLocation();
	console.log(state)
	return (
		<>
			
			<h1>Home Page</h1>
			{!state ? (
				<div>
					<p>Hello !</p>
				</div>
			) : (
				<div>
					<p>Hello {state.name} !</p>
					<p>You have {state.email } !</p>
					<p>Your password is {state.password } !</p>
				</div>
			)}
			<Link to='/about'>About</Link>
			<br />
			<Link to='/contact'>Contact</Link>
			<br />
			<Link to='/category'>Category</Link>
			<br />
			<Link to='/list'>List</Link>
		</>
	);
};

export default Home;
