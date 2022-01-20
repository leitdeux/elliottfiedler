/** @jsxImportSource theme-ui */
import React from 'react';
import {
  Link,
  Text,
} from 'theme-ui';
import {
  useIntl
} from 'gatsby-plugin-react-intl';

// components
import Layout from '../components/layout/Layout';
import Section from '../components/layout/Section';

export default function NotFoundPage() {
  const intl = useIntl();

	return (
		<Layout
      intl={intl}
    >
      <Section>
        <Text>Page Not Found</Text>
        <br />
        <Link to="/">Go Back?</Link>
      </Section>
    </Layout>
	);
}

