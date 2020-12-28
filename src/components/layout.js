import React from 'react'

import Header from './header'
import Footer from './footer'

import '../theme/theme-base.css'
import 'typeface-quicksand'

const Layout = ({ children, ...positive }) => (
  <>
    <Header {...positive} />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
