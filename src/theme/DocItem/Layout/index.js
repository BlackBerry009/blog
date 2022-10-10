import Layout from '@theme-original/DocItem/Layout';
import React from 'react';
import Comment from '../../../components/Comments';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <Comment />
    </>
  );
}
