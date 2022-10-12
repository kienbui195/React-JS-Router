import { useLocation, Link } from 'react-router-dom';

const Detail = () => {
	const { state } = useLocation();

	return (
		<>
			<div>
				<h2>Detail {state.name}</h2>
				<div>Id: {state.id}</div>
				<div>Name: {state.name}</div>
				<div>Age: {state.age}</div>
			</div>
			<Link to='/list'>List</Link>
		</>
	);
};

export default Detail;
