import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import {
	useStaticQuery,
	graphql
} from 'gatsby';
import { injectIntl } from 'gatsby-plugin-react-intl';


function SEO(props) {
	const {
		intl,
		title,
		description,
		image
	} = props;

	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);
	const {
		buildTime,
		siteMetadata: {
			defaultTitle,
			titleTemplate,
			defaultDescription,
			siteUrl,
			twitterCardImage,
			twitterUsername,
			author
		}
	} = site;

	const seo = {
		title: (title && intl.formatMessage({ id: title })) || defaultTitle,
		description: (description && intl.formatMessage({ id: description })) || defaultDescription,
		image: (image && `${siteUrl}${image}`) || `${siteUrl}${twitterCardImage}`,
		url: `${siteUrl}${pathname}`,
		twitterImage: `${siteUrl}${twitterCardImage}`
	};

	/*schema.org in JSON-LD format */
	const schemaOrgWebPage = {
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		url: siteUrl,
		inLanguage: intl.locale,
		mainEntityOfPage: siteUrl,
		description: seo.description,
		name: seo.title,
		author: {
			'@type': 'Organization',
			name: author,
			copyrightHolder: {
				'@type': 'Organization',
				name: author
			},
			copyrightYear: `${new Date().getFullYear()}`,
			creator: {
				'@type': 'Organization',
				name: author
			},
			datePublished: '2022-01-10T03:04:29.972Z',
			dateModified: buildTime,
			image: {
				'@type': 'ImageObject',
				url: seo.image
			}
		}
	};

	return (
			<Helmet
				title={seo.title}
				titleTemplate={seo.title === defaultTitle ? '%s | Elliott Fiedler' : titleTemplate}
			>
				<html lang={intl.locale} />
				<meta name="description" content={seo.description} />
				<meta name="image" content={seo.ogImage} />

				{/* Schema.org */}
				<script type="application/ld+json">
					{JSON.stringify(schemaOrgWebPage)}
				</script>

				{/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterUsername} />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content="Elliott Fiedler" />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image:src" content={seo.twitterImage} />
			</Helmet>
	);
}

const query = graphql`
	query SEO {
		site {
			buildTime(formatString: "YYYY-MM-DD")
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl
				twitterCardImage
				twitterUsername
				author
			}
		}
	}
`;

export default injectIntl(SEO);

