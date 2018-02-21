import React from 'react'
import { Input } from 'semantic-ui-react'

const RadiusOfSearchInput = ({size, action, onChange, style, fluid}) => (
  <Input
    size={size}
    action={action}
    actionPosition='right'
    onChange={onChange}
    icon='search'
    iconPosition='left'
    placeholder='Radius of search in km...'
    style={style}
    fluid={fluid}
  />
)

export default RadiusOfSearchInput