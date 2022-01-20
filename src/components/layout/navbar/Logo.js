/** @jsxImportSource theme-ui */
import React from 'react';
import { Link } from 'gatsby';
import { Heading } from 'theme-ui';


export default function Logo() {
	return (
    <Link href="/" sx={{ color: 'inherit' }}>
      <Heading as="h3">
        Elliott Fiedler
      </Heading>
    </Link>
	);
}

