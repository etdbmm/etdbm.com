import React, { useState } from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { FaBehance as Behance, FaInstagram as Instagram } from 'react-icons/fa'
import { HiOutlineMenu as Menu } from 'react-icons/hi'

import Logo from '../assets/logo'

const Header = ({ positive }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header
      className={`absolute inset-0 bg-header-bg-mobile bg-top bg-no-repeat ${
        positive ? 'md:bg-none' : 'md:bg-header-bg'
      }`}
    >
      <div
        className={`container flex justify-between pt-5 md:pt-10 text-white ${
          positive && 'md:text-blue'
        }`}
      >
        <div className="flex space-x-8">
          <Link to="/">
            <Logo />
          </Link>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            <Instagram size={30} />
          </a>
          <a
            href="https://behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            <Behance size={30} />
          </a>
        </div>

        <nav className="relative text-right z-20">
          <Menu
            size={30}
            className="absolute right-0 cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <ul
            className={`absolute md:relative transition-transform transform md:translate-x-0 top-11 right-0 md:inset-0 flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-16 bg-blue md:bg-transparent py-8 px-10 md:p-0 font-bold shadow-2xl md:shadow-none rounded-lg md:rounded-none ${
              !menuOpen && `translate-x-full -right-8`
            }`}
          >
            <li>
              <AnchorLink to="/#projetos">projetos</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#sobre">sobre</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/#contato">contato</AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
