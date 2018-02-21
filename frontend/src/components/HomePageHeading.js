import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import RadiusOfSearchInput from "./RadiusOfSearchInput";

const HomePageHeading = () => (
  <Container text>
    <Header size='huge' style={{ fontSize: '2.5em', marginBottom: '0.5em', marginTop: '5em' }} color='teal'>
      ShopFinder
      <Header.Subheader size='large' style={{ fontSize: '0.75em', paddingTop: '0.25em' }}>
        Search for shops located nearby your current location.
      </Header.Subheader>
    </Header>
    <RadiusOfSearchInput size='huge' action={{ color:'teal', content:'Search', size:'big' }} fluid />
  </Container>
)

export default HomePageHeading