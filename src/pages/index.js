/** @jsxImportSource theme-ui */
import React from 'react';
import {
  Container,
  Link,
  Text,
} from 'theme-ui';
import {
  FormattedMessage,
  useIntl,
  changeLocale
} from 'gatsby-plugin-react-intl';

// components
import Layout from '../components/layout/Layout';
import Section from '../components/layout/Section';


function TextContainer(props) {
  const {
    fontSize,
    children
  } = props;

  return (
    <Container
      sx={{
        py: 3,
        fontSize: fontSize || 4
      }}
    >
      <Text>
        {children}
      </Text>
    </Container>
  );
}

export default function LandingPage() {
  const intl = useIntl();

	return (
		<Layout intl={intl}>
      <Section>
        <TextContainer fontSize={6}>
          <FormattedMessage id="greeting" />
        </TextContainer>
        {/* 自己紹介 */}
        <TextContainer>
          <FormattedMessage id="selfIntro" />
        </TextContainer>
        {/* Stuff I've done */}
        <TextContainer>
          <FormattedMessage id="cofounded" />
          {/* In 2016, I co-founded a <Link target="_blank" rel="noopener noreferrer" href="https://eigopop.com">startup in Japan that provides 1-to-1 online English lessons for children.</Link> I architect, build and deploy the service platform, internal tooling and client-facing web and mobile apps. */}
        </TextContainer>
        {/* Availability */}
        <TextContainer>
          {/* I'm <Link href={`mailto:elliott@elliottfiedler.com?subject=${intl.formatMessage({ id: 'subjectLine' })}`}>available</Link> to help out on a variety of projects. */}
          <FormattedMessage id="available" />
        </TextContainer>
        {/* Follow me and learn more */}
        <TextContainer>
          {/* You can <Link href="https://twitter.com/leitdeux">follow me</Link> on Twitter and check out my other projects on <Link href="https://github.com/leitdeux">Github</Link>. */}
          <FormattedMessage id="twitter" />
          <FormattedMessage id="github" />
        </TextContainer>
      </Section>
    </Layout>
	);
}
