import React, { useMemo } from 'react';

import { Helmet, HelmetProps } from 'react-helmet-async';

export interface SeoProps extends Readonly<{}> {
  description?: string;
  lang?: string;
  title: string;
  name?: string;
  author?: string;
  email?: string;
  url?: string;
  fbAppId?: string;
  keywords?: string;
  disableIndexing?: boolean;
  canonicalURL?: string;
  ogImage?: string;
  ogLogo?: string;
}

const useSeo = (props: SeoProps) => {
  const metaTags = useMemo<HelmetProps['meta']>(() => {
    const { name, url, author, title, description, ogImage, ogLogo } = props;
    return [
      {
        name: `description`,
        content: description
      },
      {
        name: `author`,
        content: author
      },

      // Open Graph

      {
        property: `og:site_name`,
        content: name
      },
      {
        property: `og:url`,
        content: url
      },
      {
        property: `og:title`,
        content: title
      },
      {
        property: `og:description`,
        content: description
      },
      {
        property: `og:image`,
        content: ogImage
      },
      {
        property: `og:logo`,
        content: ogLogo
      },
      {
        property: `og:type`,
        content: `website`
      },

      // Twitter
      {
        name: `twitter:card`,
        content: `summary`
      },
      {
        name: `twitter:creator`,
        content: author
      },
      {
        name: `twitter:title`,
        content: title
      },
      {
        name: `twitter:description`,
        content: description
      }
    ];
  }, [props]);

  return {
    metaTags
  };
};

export const Seo: React.FC<SeoProps> = props => {
  const { metaTags } = useSeo(props);
  return (
    <Helmet title={props.title} meta={metaTags}>
      {props.canonicalURL && <link rel="canonical" href={props.canonicalURL} />}
    </Helmet>
  );
};

Seo.defaultProps = {
  author: 'Assets Store',
  url: '',
  disableIndexing: false
};
