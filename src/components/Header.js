import React from 'react';
import { Divider, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
	return (
		<>
			<Toolbar>
				<IconButton>
					<MenuIcon />
				</IconButton>
				<Typography variant='h5'>Eleet Developer Hackathon</Typography>
			</Toolbar>
			<Divider />
			<Toolbar>Hack the planet.</Toolbar>
		</>
	);
};

export default Header;
