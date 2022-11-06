import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
      <div className="component-container1">
        <span className="component-text">{props.name}</span>
        <span className="component-text1">{props.description}</span>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  name: 'name',
  image_src: '',
  rootClassName: '',
  image_alt: 'image',
  description: 'description',
}

AppComponent.propTypes = {
  name: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
}

export default AppComponent
