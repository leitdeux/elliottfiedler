/** @jsxImportSource theme-ui */
import React from 'react';
import {
	Container,
	Divider,
	Flex
} from 'theme-ui';
import { keyframes } from '@emotion/react';

// components
import NavbarLink from './NavbarLink';
import Overlay from '../../lib/Overlay';

const drawerFadeIn = keyframes({
	from: { opacity: 0.75, transform: 'translate3d(100vw, 0, 0)' },
	to: { opacity: 1, transform: 'translate3d(0, 0, 0)' }
});

const drawerFadeOut = keyframes({
	from: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
	to: { opacity: 0.75, transform: 'translate3d(100vw, 0, 0)' }
});


export default function DrawerMenu(props) {
	const {
		isOpen,
		onClick
	} = props;

	if (isOpen === undefined) {
		return null;
	}

	return (
		<Container>
			<Overlay
				isOpen={isOpen}
				onClick={onClick}
			/>
			<Flex
				sx={{
					justifyContent: 'flex-end',
					pointerEvents: 'none',
					position: 'relative',
					zIndex: 2
				}}
			>
				<Flex
					sx={{
						display: ['flex', null, 'none'],
						height: 'auto',
						wdth: ['60%', '35%'],
						flexDirection: 'column',
						justifyContent: 'center',
						bg: 'white',
						borderBottomLeftRadius: 8,
						borderBottomRightRadius: 0,
						boxShadow: 'var(--shadow-dark)',
						pointerEvents: isOpen ? 'auto' : 'none',
						borderTopColor: 'lightgray',
						borderTopWidth: 1,
						borderTopStyle: 'solid',
						p: 3,
						opacity: isOpen ? 1 : 0,
						animation: `${isOpen ? drawerFadeIn : drawerFadeOut} 0.35s cubic-bezier(0.7, 0.01, 0.33, 0.96)`
					}}
				>
					<NavbarLink
						path="/lessons"
						label="lessonContent"
						mobile
					/>
					<Divider />
					<NavbarLink
						path="/teachers"
						label="teacherIntro"
						mobile
					/>
					<Divider />
					<NavbarLink
						path="/app"
						label="appIntro"
						mobile
					/>
					<Divider />
					<NavbarLink
						path="/pricing"
						label="pricing"
						mobile
					/>
					<Divider />
					<NavbarLink
						path="/about"
						label="about"
						mobile
					/>
					<Divider />
					<NavbarLink
						path="/standards"
						label="standards"
						mobile
					/>
					<Divider />
					<NavbarLink
						path="/client-knowledge-base"
						label="faq"
						mobile
					/>
					<div sx={{ display: ['auto', 'none'] }}>
						<Divider />
						<NavbarLink
							path="/contact"
							label="contact"
							mobile
							textStyle={{
								color: 'var(--color-primary) !important'
							}}
						/>
					</div>
				</Flex>
			</Flex>
		</Container>
	);
}

