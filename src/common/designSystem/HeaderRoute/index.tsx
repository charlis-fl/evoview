import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'common/hooks/state';
import { RootState } from 'common/store/store';
import Header from '../header';

interface PropType {
    component: React.FC;
}

export const HeaderRoute: FC<PropType> = ({ component: Component }) => {
  return (
    <>
      <Header />
      <Component />
    </>
  );
};
