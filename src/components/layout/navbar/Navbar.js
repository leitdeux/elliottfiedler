/** @jsxImportSource theme-ui */
import React from 'react';
import {
  Flex,
  Heading,
  Link,
  Divider
} from 'theme-ui';

// components
import LocaleToggle from './LocaleToggle';


export default function Navbar({ intl }) {
	return (
    <div>
      <Flex
        sx={{
          width: '100%',
          justifyContent: 'center',
          py: 0.5,
          px: [3, 4, 0]
        }}
      >
        <Flex
          sx={{
            width: '100%',
            maxWidth: 'var(--content-max-width)',
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              flex: '0.5'
            }}
          >
            <Link href="/" sx={{ color: 'inherit' }}>
              <Heading as="h3">
                Elliott Fiedler
              </Heading>
            </Link>
          </Flex>
          <Flex
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: '--navbar-height',
              flex: '0.5'
            }}
          >
            <LocaleToggle intl={intl} />
          </Flex>
        </Flex>
      </Flex>
      <Divider sx={{ borderColor: 'divider' }}/>
    </div>
	);
}

