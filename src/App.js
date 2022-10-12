import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import './App.css';
import Category from './components/Category';
import Product from './components/Product';
import Login from './components/Login';
import List from './components/List';
import Detail from './components/Detail';

function App() {
	return (
		<div className='App'>
			<Routes>
				{/* Demo router */}
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />

				{/* Triển khai được Router & Sử dụng được useNavigate để truyền dữ liệu qua router giữa hai component */}

				{/* Triển khai được Router & Sử dụng được useNavigate để truyền dữ liệu là một object qua router giữa hai component */}
				<Route path='/category' element={<Category />} />
				<Route path='/product' element={<Product />} />

				{/* Triển khai được Router & Sử dụng được useNavigate để truyền dữ liệu là một object qua router giữa hai component BT*/}
				<Route path='/list' element={<List />} />
				<Route path='/detail' element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
