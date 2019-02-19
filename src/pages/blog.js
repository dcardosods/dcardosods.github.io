import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />

    <p style={{ textAlign: 'right' }}>
      Besides the articles below, I also write on{' '}
      <a href="https://medium.com/@dcardosods" target="_black">
        Medium
      </a>
      .
    </p>

    {data.allMarkdownRemark.edges.map(({ node }, i) => (
      <article key={node.fields.slug}>
        <header>
          <h2>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h2>
          <p>{node.frontmatter.date}</p>
        </header>
        <p>{node.excerpt}</p>
      </article>
    ))}
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
