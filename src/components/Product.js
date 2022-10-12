import { useParams, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Product = () => {
	const { state } = useLocation();
	//let { categoryId } = useParams();
	return (
		<div>
			<h3>Id selected {state.categoryId} </h3>
			<Link to='/category'>Home</Link>
		</div>
	);
};
export default Product;
