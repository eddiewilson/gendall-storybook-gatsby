import React from "react"

import { CheckboxComponent } from "./Checkbox"

export default {
  title: "Filters/Checkbox",
  component: CheckboxComponent,
  argTypes: {
    checked: { control: "boolean" },
    displayCount:  { control: "number" },
  },
}

const Template = args => <CheckboxComponent {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: "WiFi",
  whatPart: "internet",
  checked: true,
  displayCount: 2,
}
