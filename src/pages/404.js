import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title={404} />
    <h1>Page not found</h1>
  </Layout>
);

export default NotFoundPage;
