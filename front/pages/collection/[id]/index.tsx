import { useRouter } from 'next/router';

function Collection() {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
}

export default Collection;
