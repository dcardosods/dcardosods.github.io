import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h2>
        <Link to="/blog"> / blog</Link>
      </h2>

      <article>
        <header>
          <h3>{post.frontmatter.title}</h3>

          <p>
            <time dateTime={post.frontmatter.date}>
              {post.frontmatter.date_formatted}
            </time>
          </p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        date_formatted: date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
