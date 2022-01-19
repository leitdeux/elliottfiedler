/** @jsxImportSource theme-ui */
import React from 'react';
import {
  Button,
	Flex,
  Heading
} from 'theme-ui';
import {
  changeLocale,
} from 'gatsby-plugin-react-intl';
import { Icon } from '@iconify/react';

// icons
import Globe from '@iconify-icons/mdi/web-box';


export default function LocaleToggle({ intl }) {
	return (
    <Button
      sx={{
        background: 'inherit',
        cursor: 'pointer',
        height: '100%',
        pr: 0,
        color: 'text',
        '&:hover': {
          color: 'primary'
        }
      }}
      onClick={() => changeLocale(intl.locale === 'en' ? 'ja' : 'en')}
    >
      <Flex sx={{ alignItems: 'center' }}>
        <Icon
          icon={Globe}
          sx={{
            fontSize: 36
          }}
        />
        <Heading
          sx={{
            pl: 1,
            fontSize: 2,
            fontWeight: 'body'
          }}
        >
          {intl.locale === 'en' ? '日本語' : 'English'}
        </Heading>
      </Flex>
    </Button>
	);
}

