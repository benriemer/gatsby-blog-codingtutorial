import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Bio from "./Bio"
import "./sidebar.css"

import SocialLinks from "./SocialLinks"
import TechTags from "./TechTags"

const Sidebar = () => {
  return (
    <StaticQuery
      query={graphql`
                query SiteBioQuery {
                    site {
                        siteMetadata {
                            title
                            tagline                            
                            author
                            contacts {
                                youtube
                                linkedin
                                github
                                stackoverflow
                            }
                            labels {
                                tag
                                tech
                                name 
                                size 
                                color
                            }
                        }
                    }
                    allMarkdownRemark(
                        limit: 10
                        sort: { fields: [frontmatter___date], order: DESC }
                        filter: { frontmatter: { published: { eq: true } } }
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    tags
                                }
                            }
                        }
                    }
                }
            `}
      render={data => (
        <>
          <div className="sidebar-main border-right">
            <Bio author={data.site.siteMetadata.author} tagline={data.site.siteMetadata.tagline}
                 subheader="presenting Codingtutorial.de" />
            <SocialLinks contacts={data.site.siteMetadata.contacts} />
            <div className="page-links">
              <Link to="/"><span className="text-dark d-block py-1">Blog Home</span></Link>
              <Link to="https://www.youtube.com/c/CodingTutorialDE/featured" target="_blank"><span
                className="text-dark d-block py-1">Tutorials on YouTube (external)</span></Link>
              <Link to="/impressum"><span className="text-dark d-block py-1">Impressum</span></Link>
            </div>
            <div className="tech-tags mt-4">
              <TechTags labels={data.site.siteMetadata.labels} posts={data.allMarkdownRemark.edges} />
            </div>
          </div>
        </>
      )}
    />
  )
}

export default Sidebar
