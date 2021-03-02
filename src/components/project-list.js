import React from 'react'
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs'

import ProjectCards from './project-cards'

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()
  return (
    <button
      className={`text-white transition duration-500 font-bold focus:outline-none focus:border-none z-10 ${
        isActive ? `active` : `hover:text-pink`
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const Panel = ({ children }) => {
  const isActive = usePanelState()
  return isActive ? <div>{children}</div> : null
}

const ProjectList = ({
  brandingData,
  graphicDesignData,
  illustrationData,
  uxData
}) => (
  <div className="container pt-16 md:pt-24" id="projetos">
    <Tabs>
      <div
        className="flex justify-around py-4"
        data-sal="slide-up"
        data-sal-delay="600"
      >
        <div className="flex flex-col md:flex-row justify-center md:justify-around space-y-2 md:space-y-0 md:w-full">
          <Tab>branding</Tab>
          <Tab>ux</Tab>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-around space-y-2 md:space-y-0 md:w-full">
          <Tab>design gráfico</Tab>
          <Tab>ilustrações</Tab>
        </div>
      </div>
      <Panel>
        <ProjectCards data={brandingData} />
      </Panel>
      <Panel>
        <ProjectCards data={uxData} />
      </Panel>
      <Panel>
        <ProjectCards data={graphicDesignData} />
      </Panel>
      <Panel>
        <ProjectCards data={illustrationData} />
      </Panel>
    </Tabs>
  </div>
)

export default ProjectList
