import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <p style={{ fontSize: '48px', marginTop: '2.175rem' }}>
          <span aria-label="a waving hand" role="img">
            👋
          </span>{' '}
          Hey y'all!
          <br />
          <br />
          I'm <strong>Daniel</strong>. A Frontend Developer and travel
          aficionado from Brazil. Read <Link to="/blog">my writings</Link>,
          check{' '}
          <OutboundLink href="https://github.com/dcardosods">
            my code <FontAwesomeIcon icon={faGithub} />
          </OutboundLink>
          , or{' '}
          <OutboundLink href="https://twitter.com/dcardosods">
            say hi <FontAwesomeIcon icon={faTwitter} />
          </OutboundLink>
          .
        </p>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
