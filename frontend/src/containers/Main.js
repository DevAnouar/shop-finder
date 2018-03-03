import React from 'react'
import { connect } from "react-redux";
import { Container, Loader } from "semantic-ui-react";
import universal from 'react-universal-component'
import { isLoading } from "../selectors";

const UniversalComponent = universal(props => import(`./${props.page}`), {
  minDelay: 500,
  chunkName: props => props.page,
  loading: () =>
    <Container style={{width: window.innerWidth, height: window.innerHeight}}>
      <Loader active>Fetching shops&hellip;</Loader>
    </Container>
})

const mapStateToProps = ({ page, ...state }) => ({
  page,
  isLoading: isLoading(state)
})

const ConnectedMain = ({ page, isLoading }) => (
  <UniversalComponent page={page} isLoading={isLoading} />
)

const Main = connect(mapStateToProps)(ConnectedMain)

export default Main