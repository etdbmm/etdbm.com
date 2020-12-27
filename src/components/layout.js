import React from 'react'

import Footer from './footer'

import '../theme/theme-base.css'
import 'typeface-quicksand'

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
