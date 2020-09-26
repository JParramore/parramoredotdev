import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 175, height: 175, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter {
              name
              url
            }
            linkedIn {
              name
              url
            }
            github {
              name
              url
            }
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div>
      <div style={{
        marginRight: '15px',
        marginBottom: '5px',
        marginTop: '5px',
        float: 'left',
      }}>
        <Img
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `10%`,
          }}
        />
      </div>
      <div className='bio'>
        <p>
          In my undergrad I used Python to identify the function of novel spider genes. At the NHS I used SQL to capture patient data anomalies and saved the hospital £1M+.
          In my masters I built a learning managent system and pair programming tool for teachers and students using React and Python. I used to play esports professionally,
          all over europe, but now get my kicks from <i>all tests passed</i>.
        </p>
        <p>
          Follow me on <a href={`${social?.twitter.url || ``}`} style={{ textDecoration: "none" }}><strong>Twitter</strong></a>
          , connect on <a href={`${social?.linkedIn.url || ``}`} style={{ textDecoration: "none" }}><strong>LinkedIn</strong></a>, or check out my projects on <a href={`${social?.github.url || ``}`} style={{ textDecoration: "none" }}><strong>GitHub</strong>
          </a>.
          </p>
      </div>
    </div>
  )
}

export default Bio
