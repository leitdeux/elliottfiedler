/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import {
	Close,
	Flex,
	MenuButton,
	Text
} from 'theme-ui';
import { FormattedMessage } from 'gatsby-plugin-react-intl';

// components
import DrawerMenu from './DrawerMenu';
import Logo from './Logo';
import NavbarLinks from './NavbarLinks';


function Toggle(props) {
	const {
		isOpen,
		onClick,
		children
	} = props;

	if (isOpen) {
		return (
			<Close
				sx={{
					display: ['block', null, 'none'],
					cursor: 'pointer'
				}}
				type="button"
				onClick={() => onClick(false)}
			>
				{children}
			</Close>
		);
	}

	return (
		<MenuButton
			sx={{
				display: ['block', null, 'none'],
				cursor: 'pointer'
			}}
			type="button"
			onClick={() => onClick(true)}
		>
			{children}
		</MenuButton>
	);
}

export default function Navbar() {
	const [isNavbarOpen, setNavbarOpen] = useState(undefined);

	return (
		<div
			sx={{
				position: 'fixed',
				zIndex: 2,
				width: '100%'
			}}
		>
			<Flex
				sx={{
					justfyContent: 'space-between',
					alignItems: 'center',
					height: 52,
					px: [3, null, 4],
					bg: 'white',
					boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
					zIndex: 3
				}}
			>
				<Flex sx={{ alignItems: 'center' }}>
					<Logo />
					<Text
						color="gray"
						sx={{
							fontSize: 1,
							px: 3,
							display: ['none', 'block', 'block'],
							'@media screen and (max-width: 1020px) and (min-width: 832px)': {
								display: 'none'
							}
						}}
					>
						<FormattedMessage id="forChildrenAged" />
					</Text>
				</Flex>
				<div>
					<NavbarLinks />
				</div>
				<Toggle
					isOpen={isNavbarOpen}
					onClick={setNavbarOpen}
				/>
			</Flex>
			<DrawerMenu
				isOpen={isNavbarOpen}
				onClick={setNavbarOpen}
			/>
		</div>
	);
}

