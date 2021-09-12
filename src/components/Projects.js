import React from 'react'
import Item from './Item'

const Projects = ({list}) => {
  return (
    list.map(item => <Item 
      key={item.id} 
      itemImg={item.img}
      itemName={item.name} 
      itemDescription={item.about}
      itemTech={item.tech}
      itemDeploymenet={item.deployment}
      itemGithub={item.github}
      />)
  )
}

export default Projects