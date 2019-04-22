import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'

function Index({ data }) {
  const heroImg = data.allImageSharp.edges.find(x =>
    x.node.fluid.src.includes('background')
  )

  return (
    <div id="body">
      <Layout isHomepage>
        <Hero img={heroImg} />
        <About />
      </Layout>
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
