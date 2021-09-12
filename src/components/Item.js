import React from 'react'

const Item = ({itemImg, itemName, itemDescription, itemTech, itemDeploymenet, itemGithub}) => {
  return (
    <div className="col col-md-4">
      <div className="card" style={{width: 18+'rem'}}>
        <img className="card-img-top cover" src={itemImg} alt="cover"/>
        <div className="card-body">
          <h5 className="card-title">{itemName}</h5>
          <p className="card-text">{itemDescription} </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Technology: {itemTech}</li>
        </ul>
        <div className="card-body">
          <a href={itemGithub} className="card-link">Github</a>
          <a href={itemDeploymenet} className="card-link">Deployment</a>
      </div>
      </div>
    </div>
  )
}

export default Item