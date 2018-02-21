import React from 'react'
import {Form} from "semantic-ui-react";
import RadiusOfSearchInput from "./RadiusOfSearchInput";
import {reduxForm} from "redux-form";

let NearbyShopsSearchForm = (props) => {
  const { onSubmit, size, action, onChange, style } = props

  return (
    <Form onSubmit={onSubmit}>
      <RadiusOfSearchInput size={size}
                           action={action}
                           onChange={onChange}
                           style={style} />
    </Form>
  )
}
/*
NearbyShopsSearchForm = reduxForm({
  form: 'nearby_shops_search',
  enableReinitialize: true
})(NearbyShopsSearchForm)*/

export default NearbyShopsSearchForm