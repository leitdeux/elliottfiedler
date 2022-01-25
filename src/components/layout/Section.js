/** @jsxImportSource theme-ui */
import React from 'react';
import {
	Container,
	Heading
} from 'theme-ui';
import { FormattedMessage } from 'gatsby-plugin-react-intl';


export default function Section(props) {
	const {
		children,
		containerStyle,
		title,
		titleStyle,
		backgroundImage,
		backgroundImageStyle,
		backgroundImageContainerStyle,
		backgroundGradient,
		paddingless,
		fullWidth,
		id
	} = props;

	let headingStyle = {
		paddingBottom: 4,
		textAlign: 'center',
		whiteSpace: 'pre-wrap',
		px: [0, null, 5],
		fontSize: 4,
		lineHeight: 1.5
	};

	if (titleStyle) {
		headingStyle = {
			...headingStyle,
			...titleStyle
		};
	}

	return (
		<Container
			id={id}
			sx={{
				p: paddingless ? 0 : 4,
				pt: 4,
				position: 'relative',
				overflow: 'hidden',
				...containerStyle
			}}
		>
			{backgroundImage &&
				<div
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: -1,
						...backgroundImageContainerStyle
				}}
				>
					<img
						src={backgroundImage}
						sx={{
							width: '100%',
							height: '100%',
							...backgroundImageStyle
						}}
					/>
				</div>
			}
			{backgroundGradient &&
				<div
					sx={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: -2,
						background: backgroundGradient
					}}
				/>
			}
			{/* Constrains content to center-horizontal by default */}
			<Container
				sx={{
					maxWidth: fullWidth
						? 'inherit'
						: 'var(--content-max-width)'
				}}
			>
				{title &&
					<Heading
						sx={headingStyle}
					>
						<FormattedMessage id={title} />
					</Heading>
				}
				{children}
			</Container>
		</Container>
	);
}

