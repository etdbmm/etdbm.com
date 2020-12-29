import React from 'react'

import ProjectItem from '../../components/project-item'

const ProjectItemPreview = ({ entry, getAsset }) => {
  const { client, content, date, image, text, title, work } = entry
    .getIn(['data'])
    .toJS()
  return (
    <ProjectItem
      client={client}
      date={date.substring(0, 4)}
      image={getAsset(image)}
      text={text}
      title={title}
      work={work}
    >
      {content.map((item, i) => (
        <img src={getAsset(item)} key={i} alt={title} />
      ))}
    </ProjectItem>
  )
}

export default ProjectItemPreview
