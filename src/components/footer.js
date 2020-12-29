import React from 'react'

import ContactForm from './contact-form'
import Social from './social'

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
          <Social />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
