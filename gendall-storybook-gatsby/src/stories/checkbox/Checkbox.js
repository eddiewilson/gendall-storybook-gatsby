import React, { useState } from "react"
import PropTypes from "prop-types"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"

export const CheckboxComponent = ({
  title,
  whatPart,
  onChildClick,
  checked,
  displayCount,
}) => {
  //State
  const [checkedState] = useState({
    boxName: whatPart,
  })

  //send up state
  function handleClick(event) {
    onChildClick(event)
  }

  
  return (
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleClick}
            checked={checked}
            value={checkedState.boxName}
            name={checkedState.boxName}
            id={checkedState.boxName}
            color="primary"
          />}
          label={displayCount ? title + " (" + displayCount + ")" : title}
      />
  )
}

CheckboxComponent.propTypes = {
  title: PropTypes.string,
  whatPart: PropTypes.string,
  onChildClick: PropTypes.func,
  checked: PropTypes.bool,
  displayCount: PropTypes.number,
}

CheckboxComponent.defaultProps = {
  title: "",
  whatPart: "test",
  onChildClick: null,
  checked: false,
  displayCount: null,
}
