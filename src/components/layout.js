import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Socials from "./socials"
import StyledButton from "./styledbutton"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline'
        }}>
        <h1
          style={{
            ...scale(1.5),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
              textDecoration: 'none',
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <a href='/resume.pdf' style={{ textDecoration: "none" }}>
          <StyledButton content='RESUME' />
        </a>
      </div>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          float: "left",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
        <Socials />
      </h3>
    )
  }


  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <p>I'm always looking for interesting new projects and opportunities. Find me on one of my socials or shoot me an email at  <a href='mailto:jerome.parramore@gmail.com'><strong>jerome.parramore@gmail.com</strong></a>.</p>
        <div style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        }}><p>
            Powered by <a href="https://gatsbyjs.com/">Gatsby.js</a>, served by Netlify. </p><Socials /></div>
      </footer>
    </div>
  )
}

export default Layout