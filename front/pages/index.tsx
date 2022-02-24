import type { NextPage } from 'next';
import Layout from '../components/Layout/index';
import Main from '../container/Main/index';

const Home: NextPage = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default Home;
