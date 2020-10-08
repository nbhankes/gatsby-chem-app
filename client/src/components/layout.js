/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
<<<<<<< HEAD
import Nav from "../components/Nav/nav"
import TopbarSpacer from "../components/TopbarSpacer/topbarspacer"
//import TopbarContainer from "../components/TopbarContainer/topbarcontainer"
=======
>>>>>>> c7b2840b34813efb6f145a90b662cbbada8a19f8
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
<<<<<<< HEAD
      <Nav />

      <TopbarSpacer />
=======
>>>>>>> c7b2840b34813efb6f145a90b662cbbada8a19f8
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: `0 0rem 0rem`,
        }}
      >
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Created with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
