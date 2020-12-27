import React from 'react'
import Img from 'gatsby-image'

import Button from './button'

const Profile = ({ image, title, subtitle, text, tools }) => (
  <div className="container grid gap-7 items-center py-10 md:py-20 lg:grid-cols-2">
    <Img fluid={image.childImageSharp.fluid} className="max-w-md" />
    <div className="space-y-5 text-gray lg:px-8">
      <h1>{title}</h1>
      <h2 className="text-pink">{subtitle}</h2>
      <p className="font-bold">{text}</p>
      <div className="text-center md:text-left">
        <Button label="Entre em contato" primary />
      </div>
      <h2 className="text-pink">Ferramentas</h2>
      <ul className="grid grid-cols-5 gap-5">
        {tools.map(({ label, image }, i) => (
          <li key={i}>
            <Img fixed={image.childImageSharp.fixed} alt={label} />
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Profile
