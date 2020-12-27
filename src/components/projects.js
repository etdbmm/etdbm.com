import React from 'react'

import ProjectsItem from './projects-item'

const Projects = ({
  brandingData,
  graphicDesignData,
  packingDesignData,
  uxData
}) => (
  <>
    <ProjectsItem data={brandingData} />
    <ProjectsItem data={graphicDesignData} />
    <ProjectsItem data={packingDesignData} />
    <ProjectsItem data={uxData} />
  </>
)

export default Projects
