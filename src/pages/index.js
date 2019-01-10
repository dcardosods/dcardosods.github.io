import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{ textAlign: 'center' }}>
      A Frontend Developer, who{' '}
      <a
        href="https://instagram.com/dcardosods"
        target="_blank"
        rel="noopener noreferrer"
      >
        travels
      </a>
      , <Link to="/blog">writes</Link> and tries to be{' '}
      <a
        href="https://twitter.com/dcardosods"
        target="_blank"
        rel="noopener noreferrer"
      >
        social
      </a>
      .
    </p>
  </Layout>
)

export default IndexPage
