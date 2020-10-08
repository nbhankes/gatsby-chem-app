/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header/header"
import Nav from "../components/Nav/nav"

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
      <section className="wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Nav />

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
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
