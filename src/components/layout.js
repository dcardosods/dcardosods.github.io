import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Logo from './../../content/assets/dcds-icon.svg'
import { rhythm } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <Logo
            style={{ width: '48px', height: '48px', verticalAlign: 'super' }}
          />
          <h1
            style={{
              display: 'inline-block',
              marginBottom: '1px',
              padding: '8px',
              fontSize: '37px',
            }}
          >
            <div>{title.replace('dS', '')}</div>
            <div
              style={{
                marginTop: '-8px',
                textAlign: 'right',
                fontSize: '28px',
              }}
            >
              {title.replace(/(.*)(dS)/g, '$2')}
            </div>
          </h1>
        </>
      )
    } else {
      header = (
        <h2
          style={{
            display: 'inline-block',
            marginTop: 0,
            marginBottom: '1px',
          }}
        >
          {title}
        </h2>
      )
    }
    return (
      <div
        style={{
          minHeight: `100vh`,
          display: `grid`,
          gridTemplateRows: `auto 1fr auto`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `960px`,
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header style={{ borderBottom: '1px solid grey' }}>
          <Link
            to="/"
            style={{
              boxShadow: `none`,
              background: `none`,
              color: `inherit`,
            }}
          >
            {header}
          </Link>
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink>
        </footer>
      </div>
    )
  }
}

export default Layout
