import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/seo';

const PressKit = () => (
  <Layout>
    <Seo title="Press Kit" />
    <h1>Press Kit</h1>
    <p>Buncha Press kit stuff</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default PressKit;
