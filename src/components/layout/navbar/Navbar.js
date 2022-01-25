/** @jsxImportSource theme-ui */
import React from 'react';
import {
  Flex,
  Divider
} from 'theme-ui';

// components
import Logo from './Logo';
import LocaleToggle from './LocaleToggle';


export default function Navbar({ intl }) {
	return (
    <div>
      <Flex
        sx={{
          width: '100%',
          height: 64,
          justifyContent: 'center',
          px: [4, null, 0],
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
            <Logo />
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
      <Divider sx={{ borderColor: 'divider', m: 0 }}/>
    </div>
	);
}

