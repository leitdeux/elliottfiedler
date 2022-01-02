/** @jsxImportSource theme-ui */
import React from 'react';
import { Link } from 'gatsby';
import { Flex } from 'theme-ui';

// import LogoImage from '../../../assets/images/branding/eigopop-logomark.svg';


export default function Logo() {
	return (
		<Link to="/">
			<Flex sx={{ alignItems: 'center' }}>
        LOGO GOES HERE
			</Flex>
		</Link>
	);
}

