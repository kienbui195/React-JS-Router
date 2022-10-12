import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		navigate('/home', {
			state: form ,
		});
		e.preventDefault();
	};

	return (
		<>
			<Box component='form' onSubmit={handleSubmit}>
				<h2>Sign In</h2>
				<div>
					<TextField label='name' onChange={handleChange} name='name' />
					<p></p>
				</div>
				<div>
					<TextField label='email' onChange={handleChange} name='email' />
					<p></p>
				</div>
				<div>
					<TextField label='password' onChange={handleChange} name='password' />
					<p></p>
				</div>
				<p></p>
				<Button type='submit' color='success' variant='contained'>
					Submit
				</Button>
			</Box>
		</>
	);
};

export default Login;
