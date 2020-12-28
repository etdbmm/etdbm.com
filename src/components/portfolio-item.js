import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const PortfolioItem = ({
  children,
  client,
  date,
  image,
  text,
  title,
  work
}) => (
  <div className="container my-11 space-y-6">
    <div className="grid gap-8 lg:grid-cols-2">
      <Img fluid={image.childImageSharp.fluid} className="h-64 lg:h-auto" />
      <div className="lg:px-8">
        <h1 className="text-cyan-blue font-bold">{title}</h1>
        <div className="my-6 space-y-2">
          <p>
            <strong className="mr-2">ano</strong> {date}
          </p>
          <p>
            <strong className="mr-2">cliente</strong> {client}
          </p>
          <p>
            <strong className="mr-2">função</strong> {work}
          </p>
        </div>
        <p>{text}</p>
      </div>
    </div>
    <div>{children}</div>
    <div>
      <Link to="/" className="text-cyan-blue text-2xl font-bold">
        {'<'} voltar
      </Link>
    </div>
  </div>
)

export default PortfolioItem
