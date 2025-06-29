import React from 'react'

const ImageShow = ({image}) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.urls.alt_description} />
    </div>
  )
}

export default ImageShow
