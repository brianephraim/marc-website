import React from "react"
import { graphql } from "gatsby"
import { View } from 'react-native'
import PageLayout from '../PageLayout';
import SEO from "../components/seo"
import SearchPosts from "../components/searchPosts"
import StyleSheet from '../StyleSheet';

const styles = StyleSheet.create({
  container: {
    maxWidth: 768,
    alignSelf: 'center',
    width: '100%',
    borderWidth: 20,
  },
});

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <PageLayout>
        <View style={styles.container}>
          <SEO title="All posts" />
          <SearchPosts
            posts={posts}
            localSearchBlog={localSearchBlog}
            navigate={navigate}
            location={location}
          />
        </View>
      </PageLayout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
