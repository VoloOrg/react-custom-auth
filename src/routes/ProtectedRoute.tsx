import { Navigate } from "react-router-dom";
import { FC, PropsWithChildren } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { selectIsLoggedIn } from 'store/selectors';
import { PUBLIC_PAGES } from 'constants/pages';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  if (!isLoggedIn) return <Navigate to={PUBLIC_PAGES.login} />

  return children
};