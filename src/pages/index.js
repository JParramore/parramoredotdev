import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Contact from "../components/contact"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rhythm } from "../utils/typography"
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import StyledButton from '../components/styledbutton'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <Bio />
        <p>No projects found :(</p>
      </Layout>
    )
  }

  const projectLinks = (url, title, faIcon) => {

    if (url) {
      return <a
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={title}
        style={{ paddingLeft: '10px' }}>
        <FontAwesomeIcon
          icon={faIcon}
          size="1x"
        /></a>
    } else { return }

  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <h2>About</h2>
      <Bio />
      <h2>Projects</h2>
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug
        const gitURL = post.frontmatter.github
        const liveURL = post.frontmatter.live
        const isBlog = post.frontmatter.blog

        return (
          <article
            key={post.fields.slug}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                <Link
                  style={{
                    boxShadow: `none`,
                  }}
                  to={isBlog ? post.fields.slug : gitURL}
                  itemProp="url">
                  <span itemProp="headline">
                    {title}
                  </span>
                </Link>
                <div>
                  {projectLinks(gitURL, post.frontmatter.title, faGithub)}
                  {projectLinks(liveURL, post.frontmatter.title, faExternalLinkAlt)}
                </div>
              </h3>
              <small>{post.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
                style={{marginBottom: '0.4rem',}}
              />
              {isBlog ? <p style={{color: '#969696'}}><Link to={post.fields.slug} itemProp="url" style={{textDecoration: 'none'}}><strong>Read more</strong></Link></p> : null}
            </section>
          </article>
        )
      })}
      <h2>Contact</h2>
      <Contact />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          github
          live
          blog
        }
      }
    }
  }
`
