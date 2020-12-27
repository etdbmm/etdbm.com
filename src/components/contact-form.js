import React from 'react'
import { NetlifyForm, Honeypot } from 'react-netlify-forms'

import { Input, Textarea } from './input'
import Button from './button'

const ContactForm = () => (
  <NetlifyForm name="Form" action="/" honeypotName="bot-field">
    {({ handleChange, success, error }) => (
      <div className="space-y-8 md:w-3/4 lg:w-1/2">
        <h2 className="text-white">Contato</h2>
        <Honeypot />
        <Input
          type="text"
          label="nome"
          name="nome"
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          label="e-mail"
          name="e-mail"
          onChange={handleChange}
          required
        />
        <Textarea
          label="mensagem"
          name="mensagem"
          onChange={handleChange}
          required
        />
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-5 md:justify-end">
          <div className="text-center">
            {success && <p>Mensagem enviada com sucesso...</p>}
            {error && <p>Aconteceu um erro, por favor tente novamente...</p>}
          </div>
          <div className="flex space-x-5">
            <Button type="reset" label="Limpar" />
            <Button type="submit" label="Enviar" primary />
          </div>
        </div>
      </div>
    )}
  </NetlifyForm>
)

export default ContactForm
