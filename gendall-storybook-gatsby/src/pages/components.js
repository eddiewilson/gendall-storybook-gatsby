import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Components</h1>
    <p>Welcome to the components page.</p>
    <p>This repo is for building components for the Gendall storybook library. <br/>Please <code>npm run storybook</code> to checkout and develop components. </p>
  </Layout>
)

export default SecondPage
