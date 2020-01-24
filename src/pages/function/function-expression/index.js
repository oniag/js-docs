import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Paragraph, Iframe } from '../../styles';

export default function FunctionExpression ({data}) {
  console.log(data.markdownRemark.frontmatter.functionExpression[1].subtitle)
  return (
    <Content>
      <Title>
        {data.markdownRemark.frontmatter.functionExpression[0].title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.functionExpression[1].subtitle}
      </Paragraph>
      <Iframe>
        <span>frame</span>
        {/* <iframe src="https://jsfiddle.net/leonardocesca/g76nu4qt/23/embedded/js/"></iframe> */}
      </Iframe>
   </Content>
  )
}


export const pageQuery = graphql`
  query FunctionExpressionPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/function.md/" }) {
      frontmatter {
        functionExpression {
          title
          subtitle
        }
      }
    }
  }
`