/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import {
  Button,
	Flex,
	Text
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
        width: 128,
        height: '100%',
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
            fontSize: 30,
            color: 'muted',
          }}
        />
        <Text
          sx={{
            px: 1,
          }}
        >
          {intl.locale === 'en' ? '日本語' : 'English'}
        </Text>
      </Flex>
    </Button>
	);
}

