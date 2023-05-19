import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from 'common/hooks/state';
import Elemental from 'common/designSystem/elemental';
import { wikiGetDetails } from 'common/utils/network/endpoints';
import { IntroLayout } from 'features/intro/IntroLayout';
import Loader from 'common/designSystem/loader';
import { setCurrentTreeChildren } from 'common/store/appSlice';
import { useGetTreeInfoMutation } from '../intro/TreeofLifeService';
import { TreeResponse, TreeRequest, ElementalData } from '../intro/types';
import { BasicLifeFormGallery } from './Styled';

const BasicLifeFormsViewer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const currentTreeChildren = useAppSelector((state) => state.app.currentTreeChildren);
  const isAPILoading = useAppSelector((state) => Object.values(state.api.mutations).some((mutation) => mutation && mutation.status === 'pending'));
  const [genesisAPI] = useGetTreeInfoMutation();
  const [APILoader, setAPILoader] = useState(false);
  useEffect(() => {
    if (id) {
      const formData: TreeRequest = {
        ott_id: parseInt(id),
        height_limit: 1,
        format: 'arguson',
      };
      genesisAPI(formData)
        .unwrap()
        .then((res: TreeResponse) => {
          const treeChildData: Array<ElementalData> = [];
          const { arguson: { children } } = res;
          if (children.length) {
            setAPILoader(true);
            children.forEach((child, index) => {
              if (child.taxon) {
                const childData = {
                  name: child.taxon.name,
                  ottId: child.taxon.ott_id,
                  details: '',
                  img: '',
                };
                axios.get(wikiGetDetails.replace('%search%', child.taxon.name))
                  .then((result: any) => {
                    if (result.data && result.data.query && result.data.query.pages && result.data.query.pages) {
                      const { pages } = result.data.query;
                      const pageData = Object.values(pages);
                      if (pageData && pageData.length) {
                        const firstPage: any = pageData[0];
                        const extract = firstPage.extract as string;
                        if (extract) {
                          const childDetails = extract.substring(0, extract.indexOf('<h2>'));
                          childData.details = childDetails;
                        }
                        if (firstPage && firstPage.thumbnail && firstPage.thumbnail.source) {
                          childData.img = firstPage.thumbnail.source;
                        }
                        treeChildData.push(childData);
                        if (index === children.length - 1) {
                          setTimeout(() => {
                            dispatch(setCurrentTreeChildren(treeChildData));
                            setAPILoader(false);
                          }, 500);
                        }
                      }
                    }
                  });
              }
            });
          }
        });
    }
  }, [id]);
  const openTree = (ottId: number) => {
    navigate(`/tree/${ottId}`);
  };
  return (
    APILoader || isAPILoading ? <Loader></Loader> : (
      <IntroLayout>
        <BasicLifeFormGallery>
          {currentTreeChildren && currentTreeChildren.length ? (
            currentTreeChildren.map((child) => {
              return <Elemental onClick={() => openTree(child.ottId)} key={child.name} ottId={child.ottId} details={child.details} info={child.name} src={child.img} />;
            })
          ) : null}
        </BasicLifeFormGallery>
      </IntroLayout>
    )
  );
};

export default BasicLifeFormsViewer;
