import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>React MUI Blog</h1>
				<Stack spacing={2} direction='row'>
					<Button variant='contained'>Post</Button>
					<Button variant='outlined'>Like</Button>
				</Stack>
			</header>
		</div>
	);
}

export default App;
