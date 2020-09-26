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
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          display: 'flex',
          justifyContent: "space-between",
          alignItems: 'center',
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
        <StyledButton href='/resume.pdf' content='RESUME'/>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
          float:"left",
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
      <div style={{textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                  }}><p>
      Built with Gatsby by Jerome Parramore. </p><Socials /></div>
      </footer>
    </div>
  )
}

export default Layout
