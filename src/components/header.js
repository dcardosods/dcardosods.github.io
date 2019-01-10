import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../images/daniel-cardoso-ds.svg'

const Header = ({ siteTitle }) => (
  <div style={{ textAlign: 'center' }}>
    <h1>
      <Link to="/">
        <img src={logo} alt={siteTitle} />
      </Link>
    </h1>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
