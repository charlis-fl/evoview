import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'common/hooks/state';
import lang from 'common/lang';
import Elemental from 'common/designSystem/elemental';
import Loader from 'common/designSystem/loader';
import cellularOrganismsImage from 'assets/images/origin-image.jpg';
import { IntroLayout } from './IntroLayout';

const Home = () => {
  const navigate = useNavigate();
  const isAPILoading = useAppSelector((state) => Object.values(state.api.mutations).some((mutation) => mutation && mutation.status === 'pending'));
  const { common } = lang;
  const getBasicLifeForms = () => {
    navigate('/93302');
  };
  return (
    <IntroLayout>
      {isAPILoading ? <Loader /> : (
        <div className="intro-container">
          <Elemental showDetails={true} src={cellularOrganismsImage} ottId={1} info={common.originName} details={common.originDetails} onClick={() => getBasicLifeForms()} />
        </div>
      )}
    </IntroLayout>
  );
};

export default Home;
