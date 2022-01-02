/** @jsxImportSource theme-ui */
import React from 'react';
import { Flex } from 'theme-ui';

// components
import NavbarLink from './NavbarLink';


function NavbarLinks() {
	return (
		<Flex sx={{ py: 1 }}>
			<NavbarLink
				path="/lessons"
				label="lessonContent"
			/>
			<NavbarLink
				path="/teachers"
				label="teacherIntro"
			/>
			<NavbarLink
				path="/app"
				label="appIntro"
			/>
			<NavbarLink
				path="/pricing"
				label="pricing"
			/>
      {/* Language Toggle */}
      {/* Dark Mode Toggle */}
		</Flex>
	);
}

export default NavbarLinks;

