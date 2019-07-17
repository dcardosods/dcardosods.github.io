import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <h2> / blog</h2>

    <p style={{ textAlign: 'right' }}>
      Besides the articles below, I also write on{' '}
      <OutboundLink
        href="https://medium.com/@dcardosods"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faMedium} /> Medium
      </OutboundLink>
      .
    </p>

    {data.allMarkdownRemark.edges.map(({ node }, i) => (
      <article key={node.fields.slug}>
        <header>
          <h3>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <p>
            <time dateTime={node.frontmatter.date}>
              {node.frontmatter.date_formatted}
            </time>
          </p>
        </header>
        <p>{node.excerpt}</p>
      </article>
    ))}
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            date_formatted: date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
