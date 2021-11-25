import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>React MUI Blog</h1>
				<Stack spacing={2} direction='row'>
					<Button variant='contained' size='large' startIcon={<SendIcon />}>
						Send
					</Button>
					<Button variant='outlined' size='large' startIcon={<ThumbUpIcon />}>
						Like
					</Button>
				</Stack>
			</header>
		</div>
	);
}

export default App;
