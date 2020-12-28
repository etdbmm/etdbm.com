import React from 'react'
import { FaBehance as Behance, FaInstagram as Instagram } from 'react-icons/fa'

import ContactForm from './contact-form'

const Footer = () => (
  <footer className="bg-blue text-white pt-12" id="contato">
    <div className="container">
      <ContactForm />
      <div className="py-8 md:p-10 space-y-5">
        <p className="font-light text-center">
          Todos os direitos reservados © {new Date().getFullYear()}
          <br />
          Desenvolvido por{' '}
          <a
            href="https://marscollective.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            Mars Colletive
          </a>
        </p>
        <div className="flex justify-center space-x-5 lg:hidden">
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
      </div>
    </div>
  </footer>
)

export default Footer
