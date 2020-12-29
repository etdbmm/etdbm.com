import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const ProjectCards = ({ data }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-2 md:pt-8 z-50">
    {data.map(({ node }, i) => (
      <div className="first:col-span-2 first:row-span-2 relative">
        <Link to={node.fields.slug}>
          <Img
            fluid={node.frontmatter.image.childImageSharp.fluid}
            className=""
            key={i}
          />
          <div className="absolute flex inset-0 p-4 hover:bg-black hover:bg-opacity-60 opacity-0 hover:opacity-100 text-white transition duration-500">
            <div className="self-center text-center w-full">
              <p className="text-xl font-bold">{node.frontmatter.title}</p>
              <p>{node.frontmatter.role}</p>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
)

export default ProjectCards
