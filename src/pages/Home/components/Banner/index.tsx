import React from 'react'
import './index.less'

type Props = {}

export const Banner = (props: Props) => {
  return (
    <div className="banner">
        <div className="banner__logo"></div>
        <div className="banner__slogan"></div>
    </div>
  )
}