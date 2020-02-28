import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const SEO = ({ title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          property: `title`,
          content: title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `description`,
          content: data.site.siteMetadata.description,
        },
        {
          property: `og:description`,
          content: data.site.siteMetadata.description,
        },
        {
          name: `twitter:description`,
          content: data.site.siteMetadata.description,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ]}
    />
  );
};

export default SEO;
