import React from 'react';

import { Heading, Layout, SEO } from '../components';

const NotFoundPage = () => (
  <Layout>
    <SEO title={404} />
    <Heading>Page not found</Heading>
  </Layout>
);

export default NotFoundPage;
