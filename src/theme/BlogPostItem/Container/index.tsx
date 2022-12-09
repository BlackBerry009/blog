import React from 'react';
import Container from '@theme-original/BlogPostItem/Container';
import type ContainerType from '@theme/BlogPostItem/Container';
import type {WrapperProps} from '@docusaurus/types';
import Comment from '../../../components/Comments';

type Props = WrapperProps<typeof ContainerType>;

export default function ContainerWrapper(props: Props): JSX.Element {
  return (
    <>
      <Container {...props} />
      <Comment />
    </>
  );
}
