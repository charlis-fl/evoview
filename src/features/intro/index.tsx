import { useEffectOnce } from 'common/hooks/useEffectOnce';
import { HomeLayout } from './HomeLayout';
import { useGetTreeInfoMutation } from './TreeofLifeService';
import { TreeResponse, TreeRequest } from './types';

const Home = () => {
  const [genesisAPI] = useGetTreeInfoMutation();
  useEffectOnce(() => {
    const formData: TreeRequest = {
      ott_id: 93302,
      height_limit: 1,
      format: 'arguson',
    };
    genesisAPI(formData)
      .unwrap()
      .then((res: TreeResponse) => {
      });
  });
  return (
    <HomeLayout>
      intro
    </HomeLayout>
  );
};

export default Home;
