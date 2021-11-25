import React from 'react';
import { Divider, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
	return (
		<>
			<Toolbar>
				<IconButton>
					<MenuIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<Toolbar>Hack the planet.</Toolbar>
		</>
	);
};

export default Header;
