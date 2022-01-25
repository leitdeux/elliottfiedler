/** @jsxImportSource theme-ui */
import React from 'react';
import { Link } from 'gatsby';
import { Heading } from 'theme-ui';


export default function Logo() {
	return (
    <Link to="/" sx={{ color: 'inherit' }}>
      <Heading as="h3">
        Elliott FIedler
      </Heading>
    </Link>
	);
}

