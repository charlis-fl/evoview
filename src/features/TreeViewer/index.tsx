import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useAppSelector, useAppDispatch } from 'common/hooks/state';
import Elemental from 'common/designSystem/elemental';
import { wikiGetDetails } from 'common/utils/network/endpoints';
import { BasicLifeFormGallery } from 'features/BasicLifeFormsViewer/Styled';
import Loader from 'common/designSystem/loader';
import { IntroLayout } from 'features/intro/IntroLayout';
import { setCurrentTreeChildren } from 'common/store/appSlice';
import { useGetTreeInfoMutation } from '../intro/TreeofLifeService';
import { TreeResponse, TreeRequest, ElementalData } from '../intro/types';
import { TreeLayout } from './Styled';

const TreeViewer = () => {
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
          if (children && children.length) {
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
    APILoader || isAPILoading ? <Loader /> : (
      <IntroLayout>
        {currentTreeChildren && currentTreeChildren.length ? (
          <TreeLayout>
            {currentTreeChildren.length > 3 ? (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 769: 2, 1120: 4 }}
              >
                <Masonry gutter="48px">
                  {currentTreeChildren.map((child) => (
                    <Elemental onClick={() => openTree(child.ottId)} key={child.name} ottId={child.ottId} details={child.details} info={child.name} src={child.img} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )
              : (
                <BasicLifeFormGallery>
                  {currentTreeChildren.map((child) => {
                    return <Elemental onClick={() => openTree(child.ottId)} key={child.name} ottId={child.ottId} details={child.details} info={child.name} src={child.img} />;
                  })}
                </BasicLifeFormGallery>
              )}
          </TreeLayout>
        ) : null}
      </IntroLayout>
    )
  );
};

export default TreeViewer;
