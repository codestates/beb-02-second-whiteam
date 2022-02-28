import { useRouter } from 'next/router';

import Layout from '../../../components/Layout/index';
import Detail from '../../../components/NFT/Detail';

function Comment() {
  const router = useRouter();
  const { id, tokenId } = router.query;
  return (
    <>
      <Layout>
        <Detail id={id} tokenId={tokenId} />
      </Layout>
    </>
  );
}

export default Comment;
