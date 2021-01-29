import React, { useState } from "react"
import styled from "styled-components"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"
import { Text, View } from 'react-native'
import StyleSheet from '../StyleSheet';
import Link from '../gatsby-link'

const styles = StyleSheet.create({
  posts: {
    // backgroundColor: 'black',
  },
  postHeader: {
    color: '$color2',
    fontFamily: 'HeaderFont',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'left',
    textDecorationLine: 'none',
  },
  timestamp: {
    fontFamily: 'BodyFont',
    fontSize: 14,
    color: '$color3',
    textAlign:'left',
    marginBottom: 10,
  },
  excerpt: {
    fontFamily: 'BodyFont',
    fontSize: 18,
    color: '$color1',
    textAlign:'left',
    marginBottom: 60,
  },
  errorMessage: {
    fontFamily: 'BodyFont',
    fontSize: 18,
    color: '$color1',
    textAlign:'center',
    marginBottom: 60,
  },
});

const SearchBar = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  width: 100%;
  height: 3rem;
  background: #fdfdfd;
  margin-bottom: 40px;
  margin-top: 30px;

  svg {
    margin: auto 1rem;
    height: 20px;
    width: 20px;
    color: #9aa0a6;
    fill: #9aa0a6;
  }

  input {
    display: flex;
    flex: 100%;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    padding-right: 0.5rem;
    color: rgb(55, 53, 47);
    word-wrap: break-word;
    outline: none;
  }
`

const PostItem = ({title,linkTo,timestamp,excerpt}) => (
  <View>
    <Link to={linkTo} style={styles.postHeader}>
      {title}
    </Link>
    <Text style={styles.timestamp}>{timestamp}</Text>
    <Text style={styles.excerpt}>{excerpt}</Text>
  </View>
);

const SearchedPosts = ({ results }) =>
  results.length > 0 ? (
    results.map(node => {
      const {date,title,slug,description,excerpt} = node;
      return (
        <PostItem
          node={node}
          key={slug}
          title={title || slug}
          linkTo={`/blog${slug}`}
          timestamp={date}
          excerpt={description || excerpt}
        />
      );
    })
  ) : (
    <Text style={styles.errorMessage}>
      Sorry, couldn't find any posts matching this search.
    </Text>
  )

const AllPosts = ({ posts }) => (
  posts.map(({ node }) => {
    return (
      <PostItem
        node={node}
        key={node.fields.slug}
        title={node.frontmatter.title || node.fields.slug}
        linkTo={`/blog${node.fields.slug}`}
        timestamp={node.frontmatter.date}
        excerpt={node.frontmatter.description || node.excerpt}
      />
    )
  })
)

/*
<div
  dangerouslySetInnerHTML={{
    __html: node.frontmatter.description || node.excerpt,
  }}
/>
*/
const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || "")

  const results = useFlexSearch(
    query,
    localSearchBlog.index,
    JSON.parse(localSearchBlog.store)
  )

  return (
    <>
      <SearchBar>
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          id="search"
          type="search"
          placeholder="Search all posts"
          value={query}
          onChange={e => {
            navigate(
              e.target.value ? `/blog/?search=${e.target.value}` : "/blog/"
            )
            setQuery(e.target.value)
          }}
        />
      </SearchBar>
      <View style={styles.posts}>
        {query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />}
      </View>
    </>
  )
}

export default SearchPosts
