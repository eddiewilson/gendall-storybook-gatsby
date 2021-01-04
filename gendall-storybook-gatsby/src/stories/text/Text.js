import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {withTheme} from "@material-ui/core/"

const TextWrapper = withTheme(styled.div`
  p {
    &:first-child {
      margin-top: 0;
    }
  }
  &.storybook-text--dropcap {
    p {
      &:first-child {
        margin-top: 0;
        &:first-letter {
          float: left;
          line-height: 0.65;
          margin: 1rem 1rem 1rem 0;
          font-size: 6rem;
          ${props => props.theme.typography.dropCap};
        }
      }
    }
    &:before,
    &:after {
      content: "";
      display: block;
    }
    &:before {
      margin-top: -0.2em;
    }
    &:after {
      margin-bottom: -0.15em;
    }
  }
  &.storybook-text--columnCount {
    column-fill: balance;
    column-gap: ${props => props.theme.spacing(2)}px;
    column-count: 1;
    ${props => props.theme.breakpoints.up("sm")} {
      column-count: ${props => props.columnCount};
    }
  }
  
`)

export const Text = ({ ...props }) => {
  const classes = ["storybook-text"]
  const mode = props.dropCap ? "storybook-text--dropcap" : ""
  const columns = props.columnCount
    ? `storybook-text--columnCount storybook-text--columnCount-${props.columnCount}`
    : ""

  classes.push(mode, columns)

  return (
    <TextWrapper
      className={[...classes].join(" ")}
      dangerouslySetInnerHTML={{ __html: props.text }}
      {...props}
    ></TextWrapper>
  )
}

Text.propTypes = {
  dropCap: PropTypes.bool,
  columnCount: PropTypes.number,
  text: PropTypes.string.isRequired,
}

Text.defaultProps = {
  dropCap: false,
  columnCount: 1,
}
