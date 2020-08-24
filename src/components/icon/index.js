import React from 'react'

import Heart from './svg/heart'
import Twitter from './svg/twitter'
import Instagram from './svg/instagram'
import Github from './svg/github'
import Slack from './svg/slack'
import Linkedin from './svg/linkedin'
import Display from './svg/display'
import Beer from './svg/beer'
import Quote from './svg/quote'
import Plane from './svg/plane'
import ArrowRight from './svg/arrow-right'

const Icon = props => {
  const size = props.size ? props.size : 24
  const params = {
    width: size,
    height: size,
    color: props.color ? props.color : '#A0AEC0',
    style: props.style,
  }

  const icon = {
    heart: <Heart {...params} />,
    twitter: <Twitter {...params} />,
    instagram: <Instagram {...params} />,
    github: <Github {...params} />,
    slack: <Slack {...params} />,
    linkedin: <Linkedin {...params} />,
    display: <Display {...params} />,
    beer: <Beer {...params} />,
    quote: <Quote {...params} />,
    plane: <Plane {...params} />,
    'arrow-right': <ArrowRight {...params} />
  }

  return icon[props.name]
}

export default Icon
