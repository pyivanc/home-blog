import Link from 'next/link'
import matter from 'gray-matter'
import styled, { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import Layout from '../components/Layout'
import Header from '../components/Header'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html, body {
    width: 100vw;
    height: 100vh;
  }
  #__next {
    height: 100%;
  }
`

const Main = styled.div`
  padding: ${props => props.theme.spacing.m};
  grid-area: main;
  background-color: ${({ theme }) => theme.color.primary};
`

const Side = styled.div`
  grid-area: side;
`

const Index = ({ title, posts }) => (
  <Layout>
    <GlobalStyle />
      <Header title={title}/>
      <Main>
        { posts.map(({ document, slug}) => {
          return (
          <Link href={`/posts/${slug}`}>
            <a>{document.data.title}</a>
          </Link>
          )
        }) }
      </Main>
      <Side>
        Side content
      </Side>
  </Layout>
)

Index.getInitialProps = async () => {
  const configData = await import('../data/config.json')
  const posts = (context => {
    // grab all the files matching this context
    const keys = context.keys()
    // grab the values from these files
    const values = keys.map(context)
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      // get the current file value
      const value = values[index]
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default)
      // return the .md content & pretty slug
      return {
        document,
        slug,
      }
    })
    // return all the posts
    return data
  })(require.context('../posts', true, /\.md$/))
  return {
    ...configData,
    posts,
  }
}

export default Index
