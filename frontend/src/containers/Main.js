import React from 'react'
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";
import universal from 'react-universal-component'

const UniversalComponent = universal(props => import(`./${props.page}`), {
  minDelay: 1000,
  chunkName: props => props.page,
  loading: () => <Loader active />
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