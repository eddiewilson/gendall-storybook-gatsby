import React from 'react'
import {Grid} from "@material-ui/core"

import Layout from '../components/layout'
import SEO from '../components/seo'

// Page Components
import {Text} from "../stories/text/Text"

const SecondPage = () => {

  const textHtml = "<p>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt.</p><p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.</p>"
  return(
  <Layout>
    <SEO title="Page two" />
    <h1>Components</h1>
    <p>Welcome to the components page.</p>
    <p>This repo is for building components for the Gendall storybook library. <br/>Please <code>npm run storybook</code> to checkout and develop components. </p>
  <Grid 
    container 
    direction="column"
    justify="center">
    <Grid item>
      <Text columnCount={2} dropCap={false} text={textHtml}/>
    </Grid>
  </Grid>
  </Layout>
  )
}

export default SecondPage
