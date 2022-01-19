/** @jsxImportSource theme-ui */
import React from 'react';
import {
  Container,
  Flex,
  Link,
  Image,
  Text,
} from 'theme-ui';
import {
  FormattedMessage,
  useIntl
} from 'gatsby-plugin-react-intl';
import { openMailLink } from '../services';

// components
import Layout from '../components/layout/Layout';
import Section from '../components/layout/Section';

// images
import ProfileImage from '../assets/images/profile.jpeg';


function TextContainer(props) {
  const {
    header,
    children
  } = props;

  return (
    <Container
      sx={{
        py: [2, 3],
        fontSize: header ? [5, 6] : [3, 4],
      }}
    >
      <Text sx={{ whiteSpace: 'pre-wrap' }}>
        {children}
      </Text>
    </Container>
  );
}

function handleEmailClick(intl) {
  openMailLink(intl.formatMessage({ id: 'subjectLine' }));
}

export default function LandingPage() {
  const intl = useIntl();

  // TODO: test if this actually works on iOS (try on real iPad and iPhone)
  const emailLink = (
    <Link
      onClick={() => handleEmailClick(intl)}
      sx={{ cursor: 'pointer' }}
    >
      <FormattedMessage id="available_link" />
    </Link>
  );

	return (
		<Layout
      intl={intl}
      title="page__home"
    >
      <Section>
        <Flex sx={{ alignItems: 'center', mb: [3, 0] }}>
          <Image
            src={ProfileImage}
            alt=""
            sx={{
              height: [58, 72],
              width: [58, 72],
              minHeight: [58, 72],
              minWidth: [58, 72],
              objectFit: 'cover',
              borderRadius: '50%',
              mr: 3
            }}
          />
          <TextContainer header>
            <FormattedMessage id="greeting" />
          </TextContainer>
        </Flex>
        {/* 自己紹介 */}
        <TextContainer>
          <FormattedMessage id="selfIntro" />
        </TextContainer>
        {/* Stuff I've done */}
        <TextContainer>
          <FormattedMessage id="cofounded_start" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://eigopop.com"
          >
            <FormattedMessage id="cofounded_link" />
          </Link>
          <FormattedMessage id="cofounded_end" />
        </TextContainer>
        {/* Availability */}
        <TextContainer>
          <FormattedMessage id="available_start" />
          {emailLink}
          <FormattedMessage id="available_end" />
        </TextContainer>
        {/* Follow me and learn more */}
        <TextContainer>
          <FormattedMessage id="twitter_start" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/leitdeux"
          >
            <FormattedMessage id="twitter_link" />
          </Link>
          <FormattedMessage id="twitter_end" />
          <FormattedMessage id="github_start" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/leitdeux"
          >
            <FormattedMessage id="github_link" />
          </Link>
          <FormattedMessage id="github_end" />
        </TextContainer>
      </Section>
    </Layout>
	);
}
