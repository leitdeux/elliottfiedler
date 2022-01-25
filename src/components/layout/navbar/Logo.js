/** @jsxImportSource theme-ui */
import React from 'react';
import { Link } from 'gatsby';
import { Heading } from 'theme-ui';
import { FormattedMessage } from 'gatsby-plugin-react-intl';


export default function Logo() {
	return (
    <Link to="/" sx={{ color: 'inherit' }}>
      <Heading as="h3">
        <FormattedMessage id="navbarTitle" />
      </Heading>
    </Link>
	);
}

