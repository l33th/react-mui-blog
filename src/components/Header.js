import React from 'react';
import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
	return (
		<>
			<Toolbar>
				<IconButton color='inherit'>
					<MenuIcon />
				</IconButton>
				<Typography variant='h5'>Eleet Developer Hackathon</Typography>
				<IconButton color='inherit'>
					<Badge badgeContent={7} color='secondary'>
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<IconButton color='inherit'>
					<AccountCircleIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<Toolbar>Hack the planet.</Toolbar>
		</>
	);
};

export default Header;
