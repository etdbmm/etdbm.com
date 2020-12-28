import React from 'react'
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs'

import PortfolioCard from './portfolio-card'

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()
  return (
    <button
      className={`text-white font-bold focus:outline-none focus:border-none ${
        isActive && `text-pink`
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const Panel = ({ children }) => {
  const isActive = usePanelState()
  return isActive ? <p>{children}</p> : null
}

const Projects = ({
  brandingData,
  graphicDesignData,
  packingDesignData,
  uxData
}) => (
  // remover bg
  <div className="container bg-blue">
    <Tabs>
      <div className="flex justify-around py-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-around space-y-2 md:space-y-0 md:w-full">
          <Tab>branding</Tab>
          <Tab>ux</Tab>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-around space-y-2 md:space-y-0 md:w-full">
          <Tab>design gráfico</Tab>
          <Tab>embalagens</Tab>
        </div>
      </div>

      <Panel>
        <PortfolioCard data={brandingData} />
      </Panel>
      <Panel>
        <PortfolioCard data={graphicDesignData} />
      </Panel>
      <Panel>
        <PortfolioCard data={packingDesignData} />
      </Panel>
      <Panel>
        <PortfolioCard data={uxData} />
      </Panel>
    </Tabs>
  </div>
)

export default Projects
