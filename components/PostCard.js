import React from 'react'

import Link from 'next/link'
import styled from 'styled-components'

const MAX_CONTENT_CHARS = 200

const Card = styled.div`
  cursor: pointer;
  background-color: ${({theme}) => theme.color.primary};
  margin: ${({theme}) => theme.spacing.m};
  display: flex;
  flex-direction: column;
  height: 400px;
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0 5px 10px 0px black;
  }
  transition: all 0.15s;
`

const Image = styled.img`
  flex: 1;
  max-height: 50%;
`

const Content = styled.div`
  flex: 1;
  padding: ${({theme}) => theme.spacing.m};
`

const Title = styled.h4`
  color: ${({theme}) => theme.color.primaryLight};
  text-align: center;
`

const Text = styled.p``

const getText = (content) => {
  const contentLength = content.length
  const result = content.substring(0, MAX_CONTENT_CHARS)
  return contentLength > MAX_CONTENT_CHARS ? `${result}...` : result
}


const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card>
        <Image src={post.document.data.image}></Image>
        <Content>
          <Title>{post.document.data.title}</Title>
          <Text>{getText(post.document.content)}</Text>
        </Content>
      </Card>
    </Link>
  )
}


export default PostCard
