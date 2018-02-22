import React from 'react'
import {Form} from "semantic-ui-react";
import RadiusOfSearchInput from "./RadiusOfSearchInput";

const NearbyShopsSearchForm = (props) => {
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

export default NearbyShopsSearchForm