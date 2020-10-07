import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaEllipsisV } from "react-icons/fa"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header-banner">
    <Link className="header-content" to="/">
      {siteTitle}
    </Link>
    <div className="setting-button">
      <FaEllipsisV className="settings-icon" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
