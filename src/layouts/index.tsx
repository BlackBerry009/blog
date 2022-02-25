import Layout, { Content } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';
import PageHeader from './components/PageHeader';

export default function LayoutPage() {
  return (
    <Layout style={{minWidth: 1200, overflowX: 'hidden'}}>
      <PageHeader />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
