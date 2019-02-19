import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p style={{ fontSize: '48px', marginTop: '2.175rem' }}>
      <span aria-label="a waving hand" role="img">
        👋
      </span>{' '}
      Hey y'all!
      <br />
      <br />
      I'm <strong>Daniel</strong>. A Frontend Developer and travel aficionado
      from Brazil. Read <Link to="/blog">my writings</Link>, check{' '}
      <a
        href="https://github.com/dcardosods"
        target="_blank"
        rel="noopener noreferrer"
      >
        my code <FontAwesomeIcon icon={faGithub} />
      </a>
      , or{' '}
      <a
        href="https://twitter.com/dcardosods"
        target="_blank"
        rel="noopener noreferrer"
      >
        say hi <FontAwesomeIcon icon={faTwitter} />
      </a>
      .
    </p>
  </Layout>
)

export default IndexPage
