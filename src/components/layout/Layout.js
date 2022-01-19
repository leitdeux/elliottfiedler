/** @jsxImportSource theme-ui */
import React from 'react';
import { Container } from 'theme-ui';

// components
import Navbar from './navbar/Navbar';
// import Footer from './Footer';
import SEO from './SEO';


export default function Layout(props) {
	const {
		children,
		containerStyle,
		title,
		description,
		image,
    intl
	} = props;

	return (
		<Container>
			<SEO
				title={title}
				description={description}
				image={image}
			/>
      <Navbar intl={intl} />
			<Container
				sx={{
					// pt: 'var(--navbar-height)',
					...containerStyle
				}}
			>
				{children}
			</Container>
		</Container>
	);
}

