/** @jsxImportSource theme-ui */
import React from 'react';
import { Flex } from 'theme-ui';

// components
import LocaleToggle from './LocaleToggle';


export default function Navbar({ intl }) {
	return (
		<div
			sx={{
				width: '100%'
			}}
		>
			<Flex
				sx={{
          justifyContent: 'flex-end',
					alignItems: 'center',
					height: '--navbar-height',
          p: 1,
          pr: '10%'
				}}
			>
				<LocaleToggle intl={intl} />
			</Flex>
		</div>
	);
}

