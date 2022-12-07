import Layout from '@theme-original/DocItem/Layout';
import Comment from '../../../components/Comments';

export default function LayoutWrapper(props: any) {
  return (
    <>
      <Layout {...props} />
      <Comment />
    </>
  );
}
