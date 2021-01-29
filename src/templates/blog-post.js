import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Text, View } from 'react-native'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyleSheet from '../StyleSheet';

import PageLayout from '../PageLayout';
import Link from '../gatsby-link'


const styles = StyleSheet.create({

  title: {
    color: '$color2',
    fontFamily: 'HeaderFont',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'left',
    textDecorationLine: 'none',
    marginTop:40,
  },
  timestamp: {
    fontFamily: 'BodyFont',
    fontSize: 14,
    color: '$color3',
    textAlign:'left',
    marginBottom: 30,
  },

  blogContentWrap: {
    backgroundColor:'#fff',
    padding: 30,
    borderRadius: 5,
    marginBottom: 30,
    width: '100%',
    maxWidth: 768,
  },
  nextPrevLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 80,
    // marginBottom: 30,

  },
  nextPrevLinkItem: {
    fontFamily: 'BodyFont',
    fontSize: 19,
    color: '$color4',
  },
});

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <PageLayout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Text style={styles.title}>{post.frontmatter.title}</Text>
        <Text style={styles.timestamp}>
          {post.frontmatter.date}
        </Text>
        <View style={styles.blogContentWrap}>
          <MDXRenderer>{post.body}</MDXRenderer>
          <View
            style={styles.nextPrevLinks}
          >
            {
              previous
              ? (
                <Link to={`/blog${previous.fields.slug}`} rel="prev" style={styles.nextPrevLinkItem}>
                  ← {previous.frontmatter.title}
                </Link>
              )
              : (<View />)
            }
            {
              next
              ? (
                <Link to={`/blog${next.fields.slug}`} rel="next" style={styles.nextPrevLinkItem}>
                  {next.frontmatter.title} →
                </Link>
              )
              : (<View />)
            }
          </View>
        </View>

      </PageLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
