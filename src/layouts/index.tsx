import Layout, { Content } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';
import PageHeader from './components/PageHeader';

export default function LayoutPage() {
  return (
    <Layout>
      <PageHeader />
      <Content className="content">
        <Outlet />
      </Content>
    </Layout>
  );
}
