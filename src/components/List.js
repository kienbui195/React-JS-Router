import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const employees = [
	{
		id: 1,
		name: 'Hoa',
		age: 20,
	},
	{
		id: 2,
		name: 'Khánh',
		age: 25,
	},
	{
		id: 3,
		name: 'Tú',
		age: 22,
	},
];

const List = () => {
    const navigate = useNavigate();

    const handleDetail = index => {
        navigate('/detail', {state: employees[index]})
    }

	return (
		<>
            <TableContainer component={Paper}>
            <h2>List User</h2>
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell align='right'>Id</TableCell>
							<TableCell align='right'>Name</TableCell>
							<TableCell align='right'>Age</TableCell>
							<TableCell align='right'></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{employees.map((employee, index) => (
							<TableRow key={employee.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='employee'>
									{employee.name}
								</TableCell>
								<TableCell align='right'>{employee.id}</TableCell>
								<TableCell align='right'>{employee.name}</TableCell>
								<TableCell align='right'>{employee.age}</TableCell>
								<TableCell align='right'>
									<Button variant='outlined' color='success' onClick={()=>handleDetail(index)}>
										Detail
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Link to='/home'>Home</Link>
		</>
	);
};

export default List;
