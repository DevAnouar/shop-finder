import React from 'react'
import {Form} from "semantic-ui-react";
import RadiusOfSearchInput from "./RadiusOfSearchInput";

const NearbyShopsSearchForm = (props) => {
  const { onSubmit, size, action, onChange, value, style } = props

  return (
    <Form onSubmit={onSubmit}>
      <RadiusOfSearchInput size={size}
                           action={action}
                           onChange={onChange}
                           value={value}
                           style={style} />
    </Form>
  )
}

export default NearbyShopsSearchForm