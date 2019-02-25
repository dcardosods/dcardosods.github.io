import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import typography from './../utils/typography'
import Logo from './../images/dcds-icon.svg'

const Header = ({ siteTitle }) => (
  <header style={{ borderBottom: '1px solid grey' }}>
    <Link
      to="/"
      style={{
        background: 'none',
        textShadow: 'none',
        color: typography.options.headerColor,
      }}
    >
      <Logo style={{ width: '48px', height: '48px', verticalAlign: 'super' }} />
      <h1
        style={{
          padding: '8px',
          display: 'inline-block',
          fontSize: '37px',
          marginBottom: '1px',
        }}
      >
        <div>Daniel Cardoso</div>
        <div
          style={{ textAlign: 'right', fontSize: '28px', marginTop: '-8px' }}
        >
          dS
        </div>
      </h1>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
