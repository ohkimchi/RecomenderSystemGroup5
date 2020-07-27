import React from 'react'
import { cornacRecommendations, imageRecommendations } from '../Data/data'
import b001 from '../pics/b001.png'
import b01e from '../pics/b01e.png'

export const ResultBox = (props: any) => {
  const { userID, itemID } = props
  return (
    <div>
      { userID !== '' && (
        <div>{ cornacRecommendations[userID].join(', ') }</div>
      ) }
      { itemID !== '' && (
        <div> { imageRecommendations[itemID].join(', ') }</div>
      ) }
      { itemID === 'B0013XWDGC_0' && <img src={ b001 } /> }
      { itemID === 'B01EUTM45A_0' && <img src={ b01e } /> }
    </div>

  )
}
