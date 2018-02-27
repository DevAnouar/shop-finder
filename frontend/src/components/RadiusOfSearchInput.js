import React from 'react'
import { Input } from 'semantic-ui-react'

const RadiusOfSearchInput = ({size, action, value, onChange, style, fluid}) => (
  <Input
    size={size}
    action={action}
    value={value}
    onChange={onChange}
    icon={{ name: 'search', color: 'teal' }}
    iconPosition='left'
    placeholder='Radius of search in km...'
    style={style}
    fluid={fluid}
  />
)

export default RadiusOfSearchInput