/** @jsxImportSource theme-ui */
import React from 'react';
import {
	FormattedMessage,
	Link
} from 'gatsby-plugin-react-intl';


export default function NavbarLink(props) {
	const {
		path,
		label,
		mobile,
		textStyle
	} = props;

	return (
		<Link
			to={path}
			sx={{
				p: 2,
				textDecoration: 'none',
				fontSize: [16, 15, 14],

				display: [
					mobile ? 'display' : 'none',
					null,
					'block'
				],
				'&:hover': {
					color: 'var(--color-primary) !important'
				},
				...textStyle
			}}
		>
			<FormattedMessage id={label} />
		</Link>
	);
}

