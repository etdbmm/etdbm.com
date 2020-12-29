import React from 'react'
import { FaBehance as Behance, FaInstagram as Instagram } from 'react-icons/fa'

import useSiteMetadata from '../hooks/use-site-metadata'

const Social = () => (
  <>
    <a
      href={useSiteMetadata().instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium"
    >
      <Instagram size={30} />
    </a>
    <a
      href={useSiteMetadata().behance}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium"
    >
      <Behance size={30} />
    </a>
  </>
)

export default Social
