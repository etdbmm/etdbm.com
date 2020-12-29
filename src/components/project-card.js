import React from 'react'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ProjectCard = ({ data }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-2 md:pt-8">
    {data.map(({ node }, i) => (
      <Link to={node.fields.slug} key={i}>
        <BackgroundImage
          fluid={node.frontmatter.image.childImageSharp.fluid}
          className=" first:col-span-2 lg:first:row-span-2"
        >
          <div className="group bg-black bg-opacity-0 hover:bg-opacity-60 transition duration-500 h-full">
            <div className="grid content-center h-36 sm:h-56 md:h-72 lg:h-56 duration-500 opacity-0 group-hover:opacity-100">
              <h2 className="text-white text-center p-2 h-full">
                {node.frontmatter.title}
              </h2>
            </div>
          </div>
        </BackgroundImage>
      </Link>
    ))}
  </div>
)

export default ProjectCard
