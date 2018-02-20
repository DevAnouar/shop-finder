import React from 'react'
import { Input } from 'semantic-ui-react'

const RadiusOfSearchInput = () => (
  <Input
    size='large'
    icon='search'
    iconPosition='left'
    placeholder='Radius of search in km...'
    style={{ paddingTop: '0.5em', paddingBottom: '0.5em', width: '25em' }}
  />
)

export default RadiusOfSearchInput